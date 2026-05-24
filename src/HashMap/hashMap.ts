export class HashMap<T> {
  private buckets: Array<Array<[string, T]>>;
  private elementsCount: number = 0;
  private readonly loadFactor: number = 0.75;

  constructor(private bucketsSize: number = 16) {
    this.buckets = Array.from({ length: bucketsSize }, () => []);
  }

  private hash(key: string, bucketsSize = this.bucketsSize): number {
    const hashCode = Array.from(key).reduce((hash, char) => hash + char.charCodeAt(0), 0);

    return hashCode % bucketsSize;
  }

  private resizeIfNeeded(): void {
    const loadFactorExceeded = this.elementsCount / this.bucketsSize >= this.loadFactor;

    if (!loadFactorExceeded) return;

    this.resize();
  }

  private resize(): void {
    const newBucketsSize = this.bucketsSize * 2;
    const newBuckets: Array<Array<[string, T]>> = Array.from({ length: newBucketsSize }, () => []);

    this.buckets.flat().forEach(([key, value]) => {
      const index = this.hash(key, newBucketsSize);
      newBuckets[index].push([key, value]);
    });

    this.buckets = newBuckets;
    this.bucketsSize = newBucketsSize;
  }

  public set(key: string, value: T): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const itemIndex = bucket.findIndex(([k]) => k === key);

    if (itemIndex >= 0) bucket[itemIndex][1] = value;
    else {
      bucket.push([key, value]);
      this.elementsCount++;
      this.resizeIfNeeded();
    }
  }

  public get(key: string): T | null {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const foundEntry = bucket.find(([k]) => k === key);

    return foundEntry ? foundEntry[1] : null;
  }

  public has(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket.some(([k]) => k === key);
  }

  public remove(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const itemIndex = bucket.findIndex(([k]) => k === key);

    if (itemIndex >= 0) {
      bucket.splice(itemIndex, 1);
      this.elementsCount--;

      return true;
    }

    return false;
  }

  public length(): number {
    return this.elementsCount;
  }

  public clear(): void {
    this.buckets.forEach((bucket) => bucket.splice(0));
    this.elementsCount = 0;
  }

  public keys(): string[] {
    return this.buckets.flat().map(([key]) => key);
  }

  public values(): T[] {
    return this.buckets.flat().map(([, value]) => value);
  }

  public entries(): Array<[string, T]> {
    return this.buckets.flat();
  }
}

export class HashSet {
  private hashMap: HashMap<null>;

  constructor(size: number = 16) {
    this.hashMap = new HashMap<null>(size);
  }

  public add(key: string): void {
    this.hashMap.set(key, null);
  }

  public remove(key: string): boolean {
    return this.hashMap.remove(key);
  }

  public has(key: string): boolean {
    return this.hashMap.has(key);
  }

  public clear(): void {
    this.hashMap.clear();
  }

  public length(): number {
    return this.hashMap.length();
  }

  public values(): string[] {
    return this.hashMap.keys();
  }
}
