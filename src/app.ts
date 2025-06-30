import express from 'express';
import { PrismaClient } from '../prisma/generated';
import { generateUniqueShareCode } from './utils/generateShareCode';
import { Request, Response } from 'express';

const app = express();
app.use(express.json());
const prisma = new PrismaClient();


app.post('/registerUser', async (req:Request, res:Response): Promise<any> => {
  
  const { sub, email, name} = req.body;

  try {
    let user = await prisma.user.findUnique({
      where: { id: sub }
    });

    if (!user) {
      const shareCode = await generateUniqueShareCode();
      user = await prisma.user.create({
        data: {
          id: sub,
          email,
          name,
          shareCode
        }
      });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({error: 'Failed to register user'});
  }
});


app.get('/getFeed', async (req:Request, res:Response): Promise<any> => {
  try{
    const randomDates = await prisma.$queryRaw`
    SELECT * FROM "DateIdea"
    ORDER BY RANDOM()
    LIMIT 100
  `
    res.json(randomDates);
  }catch(err){
    console.log(err)
    return res.status(500)
  }
});

app.post('/saveIdea', async (req:Request, res:Response): Promise<any> => {

  const {userId, dateIdeaId} = req.body;

    try {
    const existing = await prisma.savedDateIdea.findUnique({
      where: {
        userId_dateIdeaId: {
          userId,
          dateIdeaId
        }
      }
    });

    if (existing) {
      res.status(400).json({ message: 'Idea already saved' });
    }

    const saved = await prisma.savedDateIdea.create({
      data: {
        user: { connect: { id: userId } },
        dateIdea: { connect: { id: dateIdeaId } }
      }
    });

    return res.json(saved);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to save idea' });
  }
});

app.post('/unsaveIdea', async (req:Request, res:Response): Promise<any> => {
  
  const { userId, dateIdeaId } = req.body;

  try {
    const existing = await prisma.savedDateIdea.findUnique({
      where: {
        userId_dateIdeaId: {
          userId,
          dateIdeaId
        }
      }
    });

    if (!existing) {
      return res.status(404).json({ message: 'Saved idea not found' });
    }

    await prisma.savedDateIdea.delete({
      where: {
        userId_dateIdeaId: {
          userId,
          dateIdeaId
        }
      }
    });

    res.json({ message: 'Idea unsaved successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to unsave idea' });
  }
});


app.get('/getProfile', async (req:Request, res:Response): Promise<any> => {

  const email  = req.query.email as string

  try {
    const profile = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        SavedDateIdeas: true,  
        couple: true,         
        sentRequests: true,
        receivedRequests: true
      },
    });

    if (!profile) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.post('/joinCouple', async (req:Request, res:Response): Promise<any>=>{

  const {reciverEmail, shareCode} = req.body;

  try{
    const recivingUser = await prisma.user.findUnique({
      where: {shareCode}
    })

    if(!recivingUser){
      return res.status(404).json({error: 'No partner found'})
    }

    const sendingUser = await prisma.user.findUnique({
      where: {email: reciverEmail}
    })

    if(recivingUser?.coupleId || sendingUser?.coupleId){
      res.status(400).json({error: 'Already joined a couple'})
    }
    
    const couple = await prisma.couple.create({
      data:{
        coupleName: 'frogUniverse', 
        users: {
          connect:[
            {email: reciverEmail}, {email: sendingUser?.email}
          ]
        }
      }
    })
    return res.status(201).json({error: 'Created Couple Successfuly'})
  }catch(err){

  }
});

app.post('/leaveCouple', async (req:Request, res:Response): Promise<any> => {

  const email  = req.params.email as string;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || !user.coupleId) {
      return res.status(400).json({ error: 'User is not in a couple' });
    }

    const coupleId = user.coupleId;
    
    await prisma.couple.delete({
      where: { id: coupleId }
    });

    return res.json({ message: 'Couple deleted successfully' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to delete couple' });
  }

});


app.post('/acceptRequest', async (req:Request, res:Response): Promise<any> =>{
    
    const  requestId = req.params.requestId as string;

    try{
      const requestDate = await prisma.request.findUnique({
        where:{id: requestId}
      })

      if(!requestDate){
        return res.status(404).json({ error: 'Request not found' });
      }

      if (requestDate.status !== 'pending') {
        return res.status(400).json({ error: 'Request is already handled' });
      }

      const updated = await prisma.request.update({
          where: { id: requestId },
          data: { status: 'accepted' }
      });

      res.status(200).json({ message: 'Request accepted', request: updated });
    }catch(err){
      return res.status(500).json({error: 'Failed To Accept Request'})
    }
})

app.post('declineRequest',async (req:Request, res:Response): Promise<any> =>{
    
  const  requestId = req.params.requestId as string;

    try{
      const requestDate = await prisma.request.findUnique({
        where:{id: requestId}
      })

      if(!requestDate){
        return res.status(404).json({ error: 'Request not found' });
      }

      if (requestDate.status !== 'pending') {
        return res.status(400).json({ error: 'Request is already handled' });
      }

      const updated = await prisma.request.update({
          where: { id: requestId },
          data: { status: 'declined' }
      });

      res.status(200).json({ message: 'Request Declined', request: updated });
    }catch(err){
      return res.status(500).json({error: 'Failed To Accept Request'})
    }
});

app.post('sendRequest',async (req:Request, res:Response): Promise<any> =>{
  const {email, dateIdea} = req.body;

  try{
    const sender = await prisma.user.findUnique({
      where:{email},
      include: {couple: {include: {users: true}}}
    })
  }catch{

  }
});

app.post('completeRequest',async (req:Request, res:Response): Promise<any> =>{
    
  const  requestId = req.params.requestId as string;

    try{
      const requestDate = await prisma.request.findUnique({
        where:{id: requestId}
      })

      if(!requestDate){
        return res.status(404).json({ error: 'Request not found' });
      }

      if (requestDate.status !== 'pending') {
        return res.status(400).json({ error: 'Request is already handled' });
      }

      const updated = await prisma.request.update({
          where: { id: requestId },
          data: { status: 'completed' }
      });

      res.status(200).json({ message: 'Request Declined', request: updated });
    }catch(err){
      return res.status(500).json({error: 'Failed To Accept Request'})
    }

});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});