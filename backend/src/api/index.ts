import { Router } from 'express';
import auth from './routes/auth';
import drop from './routes/drop';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	drop(app);

	return app
}