/*
 * @Description: 
 * @Date: 2022-08-03 20:58:15
 * @LastEditTime: 2022-08-03 20:58:28
 * @FilePath: \vue2-review\src\mocks\browser.js
 */
import { setupWorker } from 'msw'
import { handlers } from './handlers'
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)