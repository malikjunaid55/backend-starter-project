'use strict'

const getCreateTableSQL = () => `
  CREATE EXTENSION IF NOT EXISTS "pgcrypto";

  CREATE TABLE IF NOT EXISTS document (
    id TEXT DEFAULT gen_random_uuid() PRIMARY KEY,
    type TEXT NOT NULL,
    url TEXT NOT NULL,
    owner_id TEXT NOT NULL,
    deleted_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  ) WITH OIDS;

  CREATE INDEX document_deleted_at_idx ON document (deleted_at DESC);
  CREATE INDEX document_updated_at_idx ON document (updated_at DESC);
  CREATE INDEX document_created_at_idx ON document (created_at DESC);
`

module.exports = () => {
  // return pg.query(getCreateTableSQL())
}
