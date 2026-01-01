import express, {Request, Response} from 'express'
//import { getAllEvents, getEventByCategory, getEventById, addEvent } from "./services/EventService";
import type Event from "./models/Event";
import eventRoute from './route/EventRoute';
import router from "./route/EventRoute";

const app = express()
const port = 3000
app.use(express.json())
app.use('/',eventRoute);


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})


app.get('/test', (req, res) => {
    let returnObj = {
        name: 'test',
        age: 20,
        address: 'Thai'
    }
    res.send(returnObj);
})

    router.get("/events", async(req, res) => {
    if (req.query.pageSize && req.query.pageNo) {
    const pageSize = parseInt(req.query.pageSize as string);
    const pageNo = parseInt(req.query.pageNo as string);
    const events = await service.getAllEventsWithPagination(pageSize, pageNo);
    const totalEvents = await service.count();
    res.json({ totalEvents, events });
    res.json(await service.getAllEventsWithPagination(pageSize, pageNo));
    res.setHeader("x-total-count", totalEvents.toString());
    res.json(events);
    } else if (req.query.category) {
     const category = req.query.category;
    })







