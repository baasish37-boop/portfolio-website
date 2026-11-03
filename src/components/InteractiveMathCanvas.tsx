import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Sliders, Eye, Sparkles } from 'lucide-react';

interface InteractiveMathCanvasProps {
  isDark?: boolean;
}

export const InteractiveMathCanvas: React.FC<InteractiveMathCanvasProps> = ({ isDark = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<'wave' | 'circle' | 'spiral'>('wave');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [frequency, setFrequency] = useState<number>(2);
  const [amplitude, setAmplitude] = useState<number>(45);
  const [harmonics, setHarmonics] = useState<number>(2);
  const [theta, setTheta] = useState<number>(45); // in degrees
  const [spiralScale, setSpiralScale] = useState<number>(6);

  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let localTime = timeRef.current;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Coordinate Grid Lines
      const gridColor = isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(14, 165, 233, 0.12)';
      const axisColor = isDark ? 'rgba(148, 163, 184, 0.35)' : 'rgba(100, 116, 139, 0.4)';
      const primaryColor = isDark ? '#38bdf8' : '#0284c7';
      const secondaryColor = isDark ? '#a855f7' : '#7c3aed';
      const accentCyan = isDark ? '#06b6d4' : '#0891b2';

      ctx.lineWidth = 1;
      ctx.strokeStyle = gridColor;

      const gridSize = 30;
      // Draw Grid
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Origin
      const cx = width / 2;
      const cy = height / 2;

      // Draw Main Axes
      ctx.strokeStyle = axisColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();

      // Mode-specific render
      if (mode === 'wave') {
        // Harmonic Wave Simulation
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = primaryColor;
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = isDark ? 10 : 2;

        const pts: [number, number][] = [];
        for (let x = 0; x < width; x += 2) {
          const relX = (x - cx) * 0.02;
          let yVal = Math.sin(relX * frequency + localTime) * amplitude;
          if (harmonics >= 2) {
            yVal += Math.sin(relX * frequency * 2 - localTime * 1.2) * (amplitude * 0.4);
          }
          if (harmonics >= 3) {
            yVal += Math.sin(relX * frequency * 3 + localTime * 0.8) * (amplitude * 0.2);
          }
          const y = cy - yVal;
          pts.push([x, y]);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw Envelope or Harmonic points
        ctx.fillStyle = secondaryColor;
        const markerStep = Math.floor(pts.length / 7);
        for (let i = markerStep; i < pts.length; i += markerStep) {
          const [px, py] = pts[i];
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fill();
        }

      } else if (mode === 'circle') {
        // Unit Circle Explorer
        const rad = Math.min(width, height) * 0.35;
        const radAngle = (theta * Math.PI) / 180;
        const targetX = cx + Math.cos(radAngle) * rad;
        const targetY = cy - Math.sin(radAngle) * rad;

        // Circle outline
        ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.4)' : 'rgba(100, 116, 139, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();

        // Cosine Projection (horizontal base in electric cyan)
        ctx.strokeStyle = accentCyan;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(targetX, cy);
        ctx.stroke();

        // Sine Projection (vertical leg in violet)
        ctx.strokeStyle = secondaryColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(targetX, cy);
        ctx.lineTo(targetX, targetY);
        ctx.stroke();

        // Hypotenuse / Radius Vector
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(targetX, targetY);
        ctx.stroke();

        // Angle Arc
        ctx.strokeStyle = isDark ? '#fbbf24' : '#d97706';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 28, 0, -radAngle, true);
        ctx.stroke();

        // Current Coordinate Point
        ctx.fillStyle = primaryColor;
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(targetX, targetY, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label text on canvas
        ctx.font = '12px var(--font-mono)';
        ctx.fillStyle = isDark ? '#e2e8f0' : '#1e293b';
        ctx.fillText(`θ = ${Math.round(theta)}°`, cx + 34, cy - 10);
        ctx.fillStyle = accentCyan;
        ctx.fillText(`cos θ = ${Math.cos(radAngle).toFixed(3)}`, cx + 15, cy + 20);
        ctx.fillStyle = secondaryColor;
        ctx.fillText(`sin θ = ${Math.sin(radAngle).toFixed(3)}`, targetX + 10, (cy + targetY) / 2);

      } else if (mode === 'spiral') {
        // Logarithmic & Fibonacci Spiral: r = a * e^(b*theta)
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = primaryColor;
        ctx.shadowColor = secondaryColor;
        ctx.shadowBlur = isDark ? 8 : 1;

        const maxTurns = 5;
        const b = 0.17; // golden ratio expansion factor
        const a = spiralScale;

        let first = true;
        for (let t = 0; t < maxTurns * Math.PI * 2; t += 0.05) {
          const r = a * Math.exp(b * t);
          const px = cx + r * Math.cos(t + (isPlaying ? localTime * 0.5 : 0));
          const py = cy + r * Math.sin(t + (isPlaying ? localTime * 0.5 : 0));

          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw golden ratio rectangle guides
        ctx.strokeStyle = isDark ? 'rgba(168, 85, 247, 0.25)' : 'rgba(124, 58, 237, 0.25)';
        ctx.lineWidth = 1;
        const rectSizes = [14, 23, 37, 60, 97, 157];
        let rx = cx;
        let ry = cy;
        rectSizes.forEach((sz, idx) => {
          ctx.strokeRect(rx - sz / 2, ry - sz / 2, sz, sz);
          if (idx % 2 === 0) rx += sz * 0.1;
          else ry += sz * 0.1;
        });
      }

      if (isPlaying) {
        localTime += 0.035;
        timeRef.current = localTime;
      }
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mode, isPlaying, frequency, amplitude, harmonics, theta, spiralScale, isDark]);

  return (
    <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
      isDark ? 'bg-slate-900/80 border-slate-800 shadow-2xl' : 'bg-white/90 border-slate-200 shadow-xl'
    }`}>
      {/* Visualizer Header */}
      <div className={`px-5 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${
        isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
      }`}>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Interactive Mathematical Sandbox
          </span>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/40 border border-slate-700/50">
          <button
            type="button"
            onClick={() => setMode('wave')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
              mode === 'wave'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Harmonic Wave
          </button>
          <button
            type="button"
            onClick={() => setMode('circle')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
              mode === 'circle'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Unit Circle
          </button>
          <button
            type="button"
            onClick={() => setMode('spiral')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
              mode === 'spiral'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Golden Spiral
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="relative w-full h-64 sm:h-72 bg-transparent flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={640}
          height={320}
          className="w-full h-full object-contain cursor-crosshair"
          title="Interactive Mathematics Canvas"
        />

        {/* Floating Equation Tag */}
        <div className={`absolute bottom-3 left-4 px-3 py-1 rounded-md text-xs font-mono font-medium backdrop-blur-md border ${
          isDark 
            ? 'bg-slate-950/80 border-slate-800 text-cyan-300' 
            : 'bg-white/90 border-slate-200 text-cyan-700 shadow-sm'
        }`}>
          {mode === 'wave' && `y(t) = A·sin(ωx + t) [ω = ${frequency}, n = ${harmonics}]`}
          {mode === 'circle' && `e^(iθ) = cos(${theta}°) + i·sin(${theta}°)`}
          {mode === 'spiral' && `r(θ) = ae^(bθ) · φ ≈ 1.618`}
        </div>

        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className={`absolute top-3 right-4 p-2 rounded-lg border transition-all ${
            isDark 
              ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:bg-slate-800' 
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
          }`}
          title={isPlaying ? 'Pause Animation' : 'Play Animation'}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
        </button>
      </div>

      {/* Interactive Controls Bar */}
      <div className={`px-5 py-3 border-t text-xs flex flex-wrap items-center justify-between gap-4 ${
        isDark ? 'border-slate-800/80 bg-slate-950/40 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-600'
      }`}>
        {mode === 'wave' && (
          <div className="flex flex-wrap items-center gap-5 w-full">
            <div className="flex items-center gap-2">
              <span className="font-mono text-cyan-400">Frequency (ω):</span>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                value={frequency}
                onChange={(e) => setFrequency(parseFloat(e.target.value))}
                className="w-24 accent-cyan-400 cursor-pointer"
              />
              <span className="font-mono font-semibold">{frequency}x</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-cyan-400">Harmonics:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHarmonics(h)}
                    className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                      harmonics === h 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    n={h}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto text-slate-400">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive wave superposition</span>
            </div>
          </div>
        )}

        {mode === 'circle' && (
          <div className="flex flex-wrap items-center gap-5 w-full">
            <div className="flex items-center gap-2">
              <span className="font-mono text-cyan-400">Angle (θ):</span>
              <input
                type="range"
                min="0"
                max="360"
                step="5"
                value={theta}
                onChange={(e) => setTheta(parseFloat(e.target.value))}
                className="w-32 accent-cyan-400 cursor-pointer"
              />
              <span className="font-mono font-semibold">{Math.round(theta)}°</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTheta((t) => (t + 45) % 360)}
                className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-mono text-xs"
              >
                +45° Step
              </button>
              <button
                type="button"
                onClick={() => setTheta(45)}
                className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
                title="Reset angle"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2 ml-auto text-slate-400">
              <Eye className="w-3.5 h-3.5" />
              <span>Real-time trigonometric projections</span>
            </div>
          </div>
        )}

        {mode === 'spiral' && (
          <div className="flex flex-wrap items-center gap-5 w-full">
            <div className="flex items-center gap-2">
              <span className="font-mono text-cyan-400">Base Scale (a):</span>
              <input
                type="range"
                min="2"
                max="12"
                step="1"
                value={spiralScale}
                onChange={(e) => setSpiralScale(parseFloat(e.target.value))}
                className="w-28 accent-cyan-400 cursor-pointer"
              />
              <span className="font-mono font-semibold">{spiralScale}</span>
            </div>

            <div className="flex items-center gap-2 ml-auto text-slate-400">
              <span className="font-mono">φ = (1 + √5)/2 ≈ 1.6180339</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
