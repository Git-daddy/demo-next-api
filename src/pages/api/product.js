import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const response = await axios.get('https://api.bsx.exchange/products', {
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'gzip, deflate, br',
                },
            }); res.status(200).json(response.data);
            console.log('RESPONSE DATA', response.data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to fetch data' }); g
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}