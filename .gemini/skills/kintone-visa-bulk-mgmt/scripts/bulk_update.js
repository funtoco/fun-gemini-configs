const axios = require('axios');
const path = require('path');
const fs = require('fs');

/**
 * Bulk updates Kintone records (App 50)
 * Usage: node bulk_update.js <env_path> <type: status|field> <action_or_payload> <record_ids...>
 */

async function main() {
  const [envPath, type, actionOrPayload, ...recordIds] = process.argv.slice(2);

  if (!envPath || !type || !actionOrPayload || recordIds.length === 0) {
    console.error('Usage: node bulk_update.js <env_path> <type: status|field> <action_or_payload> <record_ids...>');
    process.exit(1);
  }

  if (!fs.existsSync(envPath)) {
    console.error(`Env file not found: ${envPath}`);
    process.exit(1);
  }

  require('dotenv').config({ path: envPath });

  const KINTONE_URL = 'https://funtoco.cybozu.com/k/';
  const auth = Buffer.from(`${process.env.KINTONE_USERNAME}:${process.env.KINTONE_PASSWORD}`).toString('base64');

  if (type === 'status') {
    console.log(`Updating status for ${recordIds.length} records to action: ${actionOrPayload}`);
    for (const id of recordIds) {
      try {
        await axios.put(
          `${KINTONE_URL}v1/record/status.json`,
          { app: 50, id: id, action: actionOrPayload },
          { headers: { 'X-Cybozu-Authorization': auth, 'Content-Type': 'application/json' } }
        );
        console.log(`✅ ID ${id}: Status updated.`);
      } catch (e) {
        console.error(`❌ ID ${id}: Failed.`, e.response?.data || e.message);
      }
    }
  } else if (type === 'field') {
    const payload = JSON.parse(actionOrPayload);
    console.log(`Updating fields for ${recordIds.length} records with payload:`, payload);
    const records = recordIds.map(id => ({ id: id, record: payload }));
    
    try {
      await axios.put(
        `${KINTONE_URL}v1/records.json`,
        { app: 50, records: records },
        { headers: { 'X-Cybozu-Authorization': auth, 'Content-Type': 'application/json' } }
      );
      console.log(`✅ Successfully updated ${records.length} records.`);
    } catch (e) {
      console.error(`❌ Bulk update failed.`, e.response?.data || e.message);
    }
  }
}

main();
