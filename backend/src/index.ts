import { Hono } from 'hono'
import userRoutes from './routes/userRoutes';
import blogRoutes from './routes/getblogRoutes';
import adminRoutes from './routes/adminRoutes'

const app = new Hono()

app.route("/api/v1/user", userRoutes);
app.route("/api/v1/blog", blogRoutes);
app.route("/api/v1/admin", adminRoutes);

export default app
