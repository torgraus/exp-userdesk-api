import bcrypt from "bcryptjs";

const validatePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export default validatePassword;
