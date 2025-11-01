import { pgTable, serial, date, time, integer, text, timestamp } from 'drizzle-orm/pg-core';
import { title } from 'process';

export const user = pgTable('user', {
	id: text('id').primaryKey().notNull(),
	firstName: text('firstName'),
	surname: text('surname'),
	libraryNumber: integer('libraryNumber').notNull(),
	email: text('email').unique().notNull(),
	password: text('password').notNull(),
	dateAdded: timestamp('dateAdded')
});

export const session = pgTable('session', {
	id: text('id').primaryKey().notNull(),
	userId: text('user_id').notNull().references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const book = pgTable('book', {
	id: text('id').primaryKey().notNull(),
	title: text('title').notNull(),
	isbn: text('isbn'),
	dateAdded: timestamp('dateAdded'),
	description: text('description')
});

export const loan = pgTable('loan', {
	id: text('id').primaryKey().notNull(),
	userId: text('user').notNull().references(() => user.id),
	dateTakenOut: timestamp('dateTakenOut').notNull(),
	loanLength: time('loanLength').notNull(),
	
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

export type Book = typeof book.$inferInsert;

export type Loan = typeof loan.$inferInsert;