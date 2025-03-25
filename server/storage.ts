import { users, type User, type InsertUser, bookings, type Booking, type InsertBooking } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookingsMap: Map<number, Booking>;
  currentUserId: number;
  currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.bookingsMap = new Map();
    this.currentUserId = 1;
    this.currentBookingId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const created_at = new Date();
    const booking: Booking = { ...insertBooking, id, created_at };
    this.bookingsMap.set(id, booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookingsMap.values());
  }
}

export const storage = new MemStorage();
