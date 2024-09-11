import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const response = await axios.get('https://api.bsx.exchange/products');
            res.status(200).json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}