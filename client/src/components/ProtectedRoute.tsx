import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Wraps any route that requires Clerk authentication.
 * Public landing pages, blog, and checkout pages do NOT use this.
 * Only admin/dashboard routes are protected.
 */
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.08_0.005_285)]">
        <div className="text-[oklch(0.72_0.12_75)] text-lg font-['Barlow_Condensed']">
          Loading...
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <>{children}</>;
}
