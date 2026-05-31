/**
 * CornerMarks — paper-trim registration marks at all four corners.
 *
 * Editorial publishers print these at the corners of magazine pages
 * so the printer knows the trim line. The v2 institutional gesture:
 * imply that this page was MADE, not generated.
 *
 * Usage:
 *   <CornerMarks color="white" size={14} />
 *   absolute-positioned to a parent; the parent must be relative.
 */
export default function CornerMarks({
  color = "currentColor",
  size = 14,
  opacity = 0.4,
  inset = 16,
  className = "",
}) {
  const s = `${size}px`;
  const i = `${inset}px`;
  const base = {
    position: "absolute",
    width: s,
    height: s,
    borderColor: color,
    opacity,
    pointerEvents: "none",
  };
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <span style={{ ...base, top: i, left: i, borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
      <span style={{ ...base, top: i, right: i, borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
      <span style={{ ...base, bottom: i, left: i, borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
      <span style={{ ...base, bottom: i, right: i, borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
    </div>
  );
}
