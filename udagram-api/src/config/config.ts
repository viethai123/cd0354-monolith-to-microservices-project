export const config = {
  username: "project3demo",
  password: "project3demo",
  database: "project3demo",
  host: "project3demo.ceb8jel5yy24.us-east-1.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: "us-east-1",
  aws_profile: "default",
  aws_media_bucket: "project-3-demo",
  url: "http://localhost:8100",
  jwt: {
    secret: "hello",
  },
};

// export const config = {
//   username: process.env.POSTGRES_USERNAME,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   host: process.env.POSTGRES_HOST,
//   dialect: "postgres",
//   aws_region: process.env.AWS_REGION,
//   aws_profile: process.env.AWS_PROFILE,
//   aws_media_bucket: process.env.AWS_BUCKET,
//   url: process.env.URL,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
// };
