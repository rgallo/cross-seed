import initialSchema from "./00-initialSchema.js";
import jobs from "./01-jobs.js";
import timestamps from "./02-timestamps.js";
import rateLimits from "./03-rateLimits.js";

export const migrations = {
	getMigrations: () =>
		Promise.resolve([initialSchema, jobs, timestamps, rateLimits]),
	getMigrationName: (migration) => migration.name,
	getMigration: (migration) => migration,
};
