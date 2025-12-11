import { ContactFormData } from '../types';

/**
 * SERVICE: Contact Form Handler
 * LAYER: Integration / Mock API
 * DESCRIPTION: Handles form submission with strict validation and latency simulation.
 */

const CONFIG = {
  NETWORK_LATENCY_MS: 800, // Increased latency for realistic "processing" feel
  API_VERSION: 'v2.1.0',
  TIMEOUT_MS: 5000
};

const VALIDATION = {
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  MIN_NAME_LENGTH: 2,
  MIN_MSG_LENGTH: 10
};

interface ApiResponse {
  success: boolean;
  data?: {
    ticketId: string;
    estimatedResponse: string;
  };
  message?: string;
  error?: {
    code: string;
    message: string;
    field?: string;
  };
  meta: {
    timestamp: string;
    version: string;
    latency: number;
  }
}

// Internal Logger Simulation
const logger = {
  info: (msg: string, data?: any) => console.log(`[API INFO] ${msg}`, data || ''),
  error: (msg: string, err?: any) => console.error(`[API ERROR] ${msg}`, err || ''),
  warn: (msg: string) => console.warn(`[API WARN] ${msg}`),
};

export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  const startTime = Date.now();
  
  logger.info('Incoming request: /api/contact/submit', { email: formData.email });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // 1. Sanitize Inputs (Simulation)
        const sanitizedData = {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          message: formData.message.trim(),
          projectType: formData.projectType
        };

        // 2. Strict Validation Layer
        if (!sanitizedData.email || !VALIDATION.EMAIL_REGEX.test(sanitizedData.email)) {
          logger.warn('Validation Failed: Invalid Email');
          reject({
            success: false,
            error: { code: 'VAL_ERR_001', message: "El formato de correo no es válido.", field: 'email' },
            meta: { timestamp: new Date().toISOString() }
          });
          return;
        }

        if (sanitizedData.name.length < VALIDATION.MIN_NAME_LENGTH) {
           logger.warn('Validation Failed: Name too short');
           reject({
            success: false,
            error: { code: 'VAL_ERR_002', message: "Nombre requerido (min 2 caracteres).", field: 'name' },
             meta: { timestamp: new Date().toISOString() }
          });
          return;
        }

        if (sanitizedData.message.length < VALIDATION.MIN_MSG_LENGTH) {
           logger.warn('Validation Failed: Message too short');
           reject({
            success: false,
             error: { code: 'VAL_ERR_003', message: "Por favor, detalla un poco más tu proyecto.", field: 'message' },
             meta: { timestamp: new Date().toISOString() }
          });
          return;
        }

        // 3. Success Response Construction
        const processTime = Date.now() - startTime;
        const ticketId = `REQ-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        
        logger.info('Request processed successfully', { ticketId, duration: `${processTime}ms` });

        resolve({ 
          success: true, 
          data: {
            ticketId: ticketId,
            estimatedResponse: '24h'
          },
          message: "Solicitud procesada correctamente.",
          meta: {
            timestamp: new Date().toISOString(),
            version: CONFIG.API_VERSION,
            latency: processTime
          }
        });

      } catch (e) {
        logger.error('Internal Server Error', e);
        reject({ 
            success: false, 
            error: { code: 'SYS_ERR_500', message: "Error interno del servidor." },
            meta: { timestamp: new Date().toISOString() }
        });
      }
    }, CONFIG.NETWORK_LATENCY_MS);
  });
};