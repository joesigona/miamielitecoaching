CREATE TABLE `assessment_leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(200) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(40) NOT NULL,
	`ageRange` varchar(20),
	`primaryGoal` varchar(80),
	`activityLevel` varchar(80),
	`referralSource` varchar(120),
	`message` text,
	`source` varchar(80) NOT NULL DEFAULT 'assessment-page',
	`status` enum('new','contacted','booked','closed') NOT NULL DEFAULT 'new',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `assessment_leads_id` PRIMARY KEY(`id`)
);
