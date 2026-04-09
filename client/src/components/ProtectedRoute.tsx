interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Pass-through wrapper — Clerk removed. Auth handled via Manus OAuth.
 */
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  return <>{children}</>;
}
