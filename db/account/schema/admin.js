module.exports = {
  name: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  email: { type: String },
  current_balance: { type: Number },
  created_date: { type: Date, default: Date.now() },
  updated_date: { type: Date },
  user_group: { type: Object },
  super_admin: { type: Boolean },
};
