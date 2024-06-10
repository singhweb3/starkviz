import bcrypt from 'bcryptjs';
import Admin from '../models/admin';
import dbConnect from '../lib/mongoose';

const DEFAULT_ADMIN_EMAIL = process.env.DEFAULT_ADMIN_EMAIL;
const DEFAULT_ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD;

export async function createDefaultAdmin() {
  await dbConnect();

  const adminExists = await Admin.findOne({ email: DEFAULT_ADMIN_EMAIL });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
    const admin = new Admin({
      email: DEFAULT_ADMIN_EMAIL,
      password: hashedPassword,
    });

    await admin.save();
    console.log('Default admin user created');
  } else {
    console.log('Default admin user already exists');
  }
}