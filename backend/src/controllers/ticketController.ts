//import the DB to update shit in that add here SOHAM

// import ticketDB from "";

import { Request, Response } from "express";

type Status = "New" | "In Progress" | "Repaired" | "Scrap";

interface Ticket {
  id: number;
  subject: string;
  equipment: string;
  team: string;
  status: Status;
  type: "Corrective" | "Preventive";
}

export const addTicketsToDb = async (req: Request, res: Response): Promise<void> => {

    //implement this SOHAM simple ticket aa gya he frontend se u just need to save it to the DB just write basic code.
    //try catch block me karna jo kare.
    // const newTicket = new TicketModel(ticket);
    // return newTicket.save();

    res.json({ success: true });
    console.log("ticked saved to the DB succesfully");
}