export function createVisitor(name, age, ticketId) {
  const obj = {
    name,
    age,
    ticketId,
  };
  return obj;
}
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketID) {
  for (const item in tickets) {
    if (item === ticketID) {
      if (tickets[item] === null) return "not sold";
      return `sold to ${tickets[item]}`;
    }
  }
  return "unknown ticket id";
}
export function simpleTicketStatus(tickets, tickedID) {
  for (const item in tickets) {
    if (item === tickedID && tickets[item] !== null) return tickets[item];
  }
  return "invalid ticket !!!";
}

export function gtcVersion(visitorNew) {
  return  visitorNew.gtc?.version;
}
