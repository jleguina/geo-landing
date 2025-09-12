export function GeometricLines() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Vertical lines with gradient fade - more visible */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-purple-400/20 to-transparent" />
      <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-purple-400/20 to-transparent" />

      {/* Horizontal lines - more visible */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-20 left-20">
        <div className="w-20 h-px bg-gradient-to-r from-purple-400/40 to-transparent" />
        <div className="w-px h-20 bg-gradient-to-b from-purple-400/40 to-transparent" />
      </div>

      <div className="absolute top-20 right-20">
        <div className="w-20 h-px bg-gradient-to-l from-purple-400/40 to-transparent" />
        <div className="w-px h-20 bg-gradient-to-b from-purple-400/40 to-transparent absolute right-0" />
      </div>

      <div className="absolute bottom-20 left-20">
        <div className="w-20 h-px bg-gradient-to-r from-purple-400/40 to-transparent" />
        <div className="w-px h-20 bg-gradient-to-t from-purple-400/40 to-transparent absolute bottom-0" />
      </div>

      <div className="absolute bottom-20 right-20">
        <div className="w-20 h-px bg-gradient-to-l from-purple-400/40 to-transparent" />
        <div className="w-px h-20 bg-gradient-to-t from-purple-400/40 to-transparent absolute right-0 bottom-0" />
      </div>
    </div>
  );
}
