import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonCardProps {
  className?: string;
  variant?: "default" | "blog" | "portfolio" | "testimonial" | "pricing";
}

export function SkeletonCard({ className, variant = "default" }: SkeletonCardProps) {
  if (variant === "blog") {
    return (
      <div className={cn("bg-card border border-border rounded-2xl overflow-hidden", className)}>
        <Skeleton className="h-48 w-full rounded-none" />
        <div className="p-6 space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex gap-4 pt-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "portfolio") {
    return (
      <div className={cn("bg-card border border-border rounded-2xl overflow-hidden", className)}>
        <Skeleton className="h-48 w-full rounded-none" />
        <div className="p-6 space-y-3">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "testimonial") {
    return (
      <div className={cn("bg-card border border-border rounded-2xl p-6", className)}>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-4" />
          ))}
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-6" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "pricing") {
    return (
      <div className={cn("bg-card border border-border rounded-2xl p-8", className)}>
        <Skeleton className="h-6 w-24 rounded-full mb-4" />
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-4 w-full mb-6" />
        <div className="space-y-3 mb-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 flex-1" />
            </div>
          ))}
        </div>
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    );
  }

  // Default card skeleton
  return (
    <div className={cn("bg-card border border-border rounded-2xl p-6", className)}>
      <Skeleton className="h-12 w-12 rounded-xl mb-4" />
      <Skeleton className="h-6 w-2/3 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

interface SkeletonListProps {
  count?: number;
  variant?: SkeletonCardProps["variant"];
  className?: string;
  gridClassName?: string;
}

export function SkeletonList({ 
  count = 3, 
  variant = "default", 
  className,
  gridClassName = "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
}: SkeletonListProps) {
  return (
    <div className={gridClassName}>
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} variant={variant} className={className} />
      ))}
    </div>
  );
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {[...Array(lines)].map((_, i) => (
        <Skeleton 
          key={i} 
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )} 
        />
      ))}
    </div>
  );
}

export function SkeletonHeader({ className }: { className?: string }) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <Skeleton className="h-6 w-24 rounded-full mx-auto" />
      <Skeleton className="h-10 w-2/3 mx-auto" />
      <Skeleton className="h-4 w-1/2 mx-auto" />
    </div>
  );
}
