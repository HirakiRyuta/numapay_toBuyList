const db = {};
module.exports = db;

db.transaction = process.env['TRANSACTION_TABLE'] || 'transaction_records';
db.pending = process.env['PENDING_RECORD_TABLE'] || 'pending_records';
db.unsent = process.env['UNSENT_TABLE'] || 'unsent_records';
db.user = process.env['USER_TABLE'] || 'users';
db.groups = process.env['GROUP_TABLE'] || 'groups';
db.sequence = process.env['SEQUENCE_TABLE'] ||'sequences';
db.wallet = process.env['WALLET_TABLE'] || 'wallets';
db.ticket = process.env['TICKET_TABLE'] || 'tickets';
db.resolved = process.env['RESOLVED_TICKET_TABLE'] || 'resolved_tickets';
db.dailyItem = process.env['DAILY_ITEM_TABLE'] || 'tbl-daily-items';
db.dailyItemRequest = process.env['DAILY_ITEM_REQUEST_TABLE'] || 'tbl-daily_item_requests';