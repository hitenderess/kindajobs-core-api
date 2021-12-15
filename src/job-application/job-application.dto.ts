import { JobApplicationStatus } from "@shared/enums/job-application-status";

export class CreateJobApplication {
    jobId: number;
}

export class UpdateJobApplicationStatus {
    jobId: number;
    applicationStatus: JobApplicationStatus;
}

