import { Router } from 'express';
import { counselorService } from '../services/counselorService';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const counselors = await counselorService.getAllCounselors();
    res.json(counselors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch counselors' });
  }
});

router.get('/:id/students', async (req, res) => {
  try {
    const counselor = await counselorService.getCounselorWithStudents(req.params.id);
    res.json(counselor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch counselor data' });
  }
});

export default router;