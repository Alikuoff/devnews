export function ArticleSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-48 bg-muted rounded-lg w-full" />
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-1/2" />
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded w-full" />
        <div className="h-3 bg-muted rounded w-full" />
      </div>
      <div className="flex justify-between">
        <div className="h-3 bg-muted rounded w-1/4" />
        <div className="h-3 bg-muted rounded w-1/4" />
      </div>
    </div>
  )
}

export function VlogSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-48 bg-muted rounded-lg w-full" />
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-1/2" />
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded w-full" />
        <div className="h-3 bg-muted rounded w-full" />
      </div>
      <div className="flex justify-between">
        <div className="h-3 bg-muted rounded w-1/3" />
        <div className="h-3 bg-muted rounded w-1/4" />
      </div>
    </div>
  )
}

export function SidebarSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-1/2" />
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-3 bg-muted rounded w-full" />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-1/2" />
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-3 bg-muted rounded w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

