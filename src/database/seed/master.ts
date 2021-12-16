import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash("master", 8);

  await connection.query(
    `INSERT INTO USERS( id, email, password, "isMaster", created_at)
            values('${id}', 'master@hospital.com.br', '${password}', true, 'now()')
        `
  );

  await connection.close;
}

create().then(() => console.log("User admin created"));
