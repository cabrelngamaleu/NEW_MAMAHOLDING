import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true' || parseInt(process.env.EMAIL_PORT || '587') === 465, // true pour le port 465 (SSL)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Pour les certificats auto-signés
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validation des champs obligatoires
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    // Email à envoyer à MAMAHOLDING
    const mailOptions = {
      from: `"Formulaire Contact MAMAHOLDING" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO || 'drh@mamaholding.net',
      subject: `[Site Web MAMAHOLDING] ${subject || 'Nouveau message'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f3f4f6;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f3f4f6;">
            <tr>
              <td style="padding: 20px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); background-color: #dc2626; padding: 40px 30px; text-align: center;">
                      <img src="https://mamaholding.net/logo.png" alt="MAMAHOLDING S.A" style="width: 120px; height: auto; display: block; margin: 0 auto 20px;" />
                      <h1 style="color: #ffffff; font-size: 28px; font-weight: bold; margin: 0 0 10px 0;">📧 Nouveau Message Client</h1>
                      <p style="color: #ffffff; font-size: 15px; margin: 0; opacity: 0.95;">Formulaire de Contact - Site Web</p>
                      <div style="display: inline-block; background-color: rgba(255,255,255,0.2); padding: 8px 20px; border-radius: 20px; margin-top: 15px; font-size: 13px; color: #ffffff;">
                        🔔 Notification Instantanée
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Nom -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                        <tr>
                          <td style="background-color: #ffffff; padding: 20px; border-left: 4px solid #dc2626; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                            <div style="color: #dc2626; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">
                              👤 NOM COMPLET
                            </div>
                            <div style="color: #1f2937; font-size: 18px; font-weight: 600;">
                              ${firstName} ${lastName || ''}
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Email -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                        <tr>
                          <td style="background-color: #ffffff; padding: 20px; border-left: 4px solid #dc2626; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                            <div style="color: #dc2626; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">
                              ✉️ ADRESSE EMAIL
                            </div>
                            <div style="color: #1f2937; font-size: 18px; font-weight: 600;">
                              <a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-weight: bold;">${email}</a>
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                      ${phone ? `
                      <!-- Téléphone -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                        <tr>
                          <td style="background-color: #ffffff; padding: 20px; border-left: 4px solid #dc2626; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                            <div style="color: #dc2626; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">
                              📱 TÉLÉPHONE
                            </div>
                            <div style="color: #1f2937; font-size: 18px; font-weight: 600;">
                              <a href="tel:${phone}" style="color: #dc2626; text-decoration: none; font-weight: bold;">${phone}</a>
                            </div>
                          </td>
                        </tr>
                      </table>
                      ` : ''}
                      
                      <!-- Sujet -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                        <tr>
                          <td style="background-color: #ffffff; padding: 20px; border-left: 4px solid #dc2626; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                            <div style="color: #dc2626; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">
                              📋 SUJET DE LA DEMANDE
                            </div>
                            <div style="color: #1f2937; font-size: 18px; font-weight: 600;">
                              ${subject || 'Non spécifié'}
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Divider -->
                      <div style="height: 2px; background: linear-gradient(90deg, transparent, #dc2626, transparent); margin: 30px 0;"></div>
                      
                      <!-- Message -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="background-color: #fef2f2; padding: 25px; border-radius: 8px; border: 2px solid #fee2e2;">
                            <div style="color: #dc2626; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.5px;">
                              💬 MESSAGE DU CLIENT
                            </div>
                            <div style="color: #1f2937; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">
${message}
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); background-color: #1f2937; padding: 30px; text-align: center;">
                      <div style="color: #dc2626; font-size: 24px; font-weight: bold; margin-bottom: 10px;">
                        MAMAHOLDING S.A
                      </div>
                      <p style="color: #ffffff; font-size: 13px; margin: 8px 0; opacity: 0.9;">
                        Ce message a été envoyé depuis le formulaire de contact du site web
                      </p>
                      <p style="color: #ffffff; font-size: 13px; margin: 8px 0;">
                        <strong style="color: #dc2626;">mamaholding.net</strong>
                      </p>
                      <p style="color: #ffffff; font-size: 11px; margin-top: 15px; opacity: 0.7;">
                        Excellence depuis 2004 • Leader du Commerce en Gros au Cameroun
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Nouveau message du site web MAMAHOLDING

Nom: ${firstName} ${lastName || ''}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}
Sujet: ${subject || 'Non spécifié'}

Message:
${message}

---
Ce message a été envoyé depuis le formulaire de contact du site mamaholding.net
      `,
    }

    // Email de confirmation à l'utilisateur
    const confirmationMailOptions = {
      from: `"SERVICE CLIENT - MAMAHOLDING S.A" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Confirmation de réception - MAMAHOLDING S.A',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #1f2937;
              background: #f3f4f6;
              padding: 20px;
            }
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
              position: relative;
            }
            .logo {
              width: 120px;
              height: auto;
              margin: 0 auto 20px;
              display: block;
              position: relative;
              z-index: 1;
            }
            .content {
              padding: 40px 30px;
            }
            h2 {
              color: #dc2626;
              margin-bottom: 20px;
            }
            .recap-box {
              background: linear-gradient(135deg, #fef2f2 0%, #fff 100%);
              padding: 20px;
              border-radius: 12px;
              border-left: 4px solid #dc2626;
              margin: 24px 0;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin: 24px 0;
            }
            .info-card {
              background: #f9fafb;
              padding: 16px;
              border-radius: 10px;
              border: 2px solid #e5e7eb;
              text-align: center;
            }
            .info-card-icon {
              font-size: 24px;
              margin-bottom: 8px;
            }
            .info-card-label {
              color: #6b7280;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 4px;
            }
            .info-card-value {
              color: #dc2626;
              font-weight: 700;
              font-size: 15px;
            }
            .cta-button {
              display: inline-block;
              padding: 16px 40px;
              background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
              color: white !important;
              text-decoration: none;
              border-radius: 10px;
              margin: 24px 0;
              font-weight: 700;
              box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
            }
            .footer {
              background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .footer-logo {
              font-size: 24px;
              font-weight: bold;
              color: #dc2626;
              margin-bottom: 12px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <img src="https://mamaholding.net/logo.png" alt="MAMAHOLDING S.A" class="logo" />
              <h1 style="margin: 0 0 8px 0; font-size: 28px;">✅ Message Bien Reçu !</h1>
              <p style="margin: 0; opacity: 0.95; font-size: 15px;">Merci pour votre confiance</p>
            </div>
            
            <div class="content">
              <h2>Bonjour ${firstName},</h2>
              
              <p style="color: #374151; font-size: 16px; margin: 16px 0;">
                Nous avons bien reçu votre message et nous vous en remercions sincèrement.
              </p>
              
              <p style="color: #374151; font-size: 16px; margin: 16px 0;">
                <strong style="color: #dc2626;">Notre équipe vous répondra dans les plus brefs délais</strong>, 
                généralement sous 24 à 48 heures ouvrables.
              </p>
              
              <div class="recap-box">
                <p style="margin: 0 0 8px 0;"><strong>📋 Récapitulatif de votre demande</strong></p>
                <p style="margin: 0; color: #6b7280; font-size: 15px;">${subject || 'Demande d\'information'}</p>
              </div>
              
              <div class="info-grid">
                <div class="info-card">
                  <div class="info-card-icon">📱</div>
                  <div class="info-card-label">Téléphone</div>
                  <div class="info-card-value">+237 690 20 19 78</div>
                </div>
                <div class="info-card">
                  <div class="info-card-icon">✉️</div>
                  <div class="info-card-label">Email</div>
                  <div class="info-card-value">drh@mamaholding.net</div>
                </div>
              </div>
              
              <p style="color: #374151; margin: 24px 0 16px 0;">
                <strong>En attendant notre réponse :</strong>
              </p>
              <ul style="color: #6b7280; padding-left: 20px; margin: 0;">
                <li style="margin: 8px 0;">Découvrez nos entités CAC, TRINCO et ECOFOOD</li>
                <li style="margin: 8px 0;">Consultez nos actualités et réalisations</li>
                <li style="margin: 8px 0;">N'hésitez pas à nous appeler directement</li>
              </ul>
              
              <div style="text-align: center; margin: 32px 0;">
                <a href="https://mamaholding.net" class="cta-button">🌐 Visiter Notre Site</a>
              </div>
            </div>
            
            <div class="footer">
              <div class="footer-logo">MAMAHOLDING S.A</div>
              <p style="margin: 8px 0; opacity: 0.9; font-size: 13px;">Excellence depuis 2004</p>
              <p style="margin: 16px 0; opacity: 0.9; font-size: 13px;">
                📧 drh@mamaholding.net | 📱 +237 690 20 19 78<br>
                🌐 <a href="https://mamaholding.net" style="color: #dc2626; text-decoration: none;">mamaholding.net</a>
              </p>
              <p style="margin-top: 16px; opacity: 0.7; font-size: 11px;">
                Leader du Commerce en Gros au Cameroun
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Bonjour ${firstName},

Nous avons bien reçu votre message et nous vous en remercions.

Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 à 48 heures ouvrables.

Récapitulatif de votre demande : ${subject || 'Demande d\'information'}

En attendant notre réponse, n'hésitez pas à nous appeler au +237 690 20 19 78

Cordialement,
L'équipe MAMAHOLDING S.A

---
Excellence depuis 2004
drh@mamaholding.net | +237 690 20 19 78
mamaholding.net
      `,
    }

    // Envoi des deux emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      { 
        success: true,
        message: 'Message envoyé avec succès ! Vous allez recevoir un email de confirmation.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { 
        error: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement.' 
      },
      { status: 500 }
    )
  }
}
