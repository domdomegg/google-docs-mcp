import type {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import type {Config} from './types.js';

// Document operations
import {registerDocumentGetRaw} from './document-get-raw.js';
import {registerDocumentGetText} from './document-get-text.js';
import {registerDocumentCreate} from './document-create.js';
import {registerDocumentBatchUpdate} from './document-batch-update.js';
import {registerDocumentAppend} from './document-append.js';
import {registerDocumentInsert} from './document-insert.js';
import {registerDocumentReplace} from './document-replace.js';

export type {Config} from './types.js';

export function registerAll(server: McpServer, config: Config): void {
	// Document operations
	registerDocumentGetRaw(server, config);
	registerDocumentGetText(server, config);
	registerDocumentCreate(server, config);
	registerDocumentBatchUpdate(server, config);
	registerDocumentAppend(server, config);
	registerDocumentInsert(server, config);
	registerDocumentReplace(server, config);
}
