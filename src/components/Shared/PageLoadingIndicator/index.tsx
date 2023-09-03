import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function PageLoadingIndicator() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <div>
      {loading && (
        <div
          style={{
            height: "3px",
            background: "#6317fe",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 9999,
          }}
        ></div>
      )}
      {/* Your page content */}
    </div>
  );
}

export default PageLoadingIndicator;
