interface Bucket {
  tokens: number;
  updatedAt: number;
}

const buckets = new Map<string, Bucket>();

export function takeToken(
  key: string,
  { capacity, refillMs }: { capacity: number; refillMs: number },
) {
  const now = Date.now();
  const bucket = buckets.get(key) ?? { tokens: capacity, updatedAt: now };
  const refill = Math.floor((now - bucket.updatedAt) / refillMs);

  if (refill > 0) {
    bucket.tokens = Math.min(capacity, bucket.tokens + refill);
    bucket.updatedAt = now;
  }

  if (bucket.tokens < 1) {
    buckets.set(key, bucket);
    return false;
  }

  bucket.tokens -= 1;
  buckets.set(key, bucket);
  return true;
}
