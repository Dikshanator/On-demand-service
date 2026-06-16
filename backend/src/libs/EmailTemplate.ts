export const Verification_Email_Template = `
<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <title>Verify Your Account</title>
   </head>
   <body style="margin:0;padding:0;background:#f5f5f7;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
         <tr>
            <td align="center">
               <table width="600" style="background:#ffffff;margin-top:40px;border-radius:12px;padding:40px;">
                  <tr>
                     <td align="center">
                        <h1 style="color:#2F2D9B;margin:0;">
                           On-Demand Service Platform
                        </h1>
                     </td>
                  </tr>
                  <tr>
                     <td style="padding-top:30px;">
                        <h2 style="color:#222;">
                           Verify Your Email Address
                        </h2>
                        <p style="color:#666;font-size:15px;line-height:1.7;">
                           Thank you for creating an account. Please use the verification code below to complete your registration.
                        </p>
                        <div style="
                           background:#F3F4F6;
                           padding:20px;
                           text-align:center;
                           margin:30px 0;
                           border-radius:10px;
                           ">
                           <span style="
                              font-size:32px;
                              font-weight:bold;
                              letter-spacing:8px;
                              color:#2F2D9B;
                              ">
                           {verificationCode}
                           </span>
                        </div>
                        <p style="color:#666;">
                           This code will expire in <strong>10 minutes</strong>.
                        </p>
                        <p style="color:#666;">
                           If you didn't request this, please ignore this email.
                        </p>
                     </td>
                  </tr>
               </table>
            </td>
         </tr>
      </table>
   </body>
</html>
`;

export const Welcome_Email_Client = `
<h2 style="color:#2F2D9B;">
   Welcome to Our App, {name}!
</h2>
<p>
   Your account has been successfully created.
</p>
<div style="margin:30px 0;">
</div>
<p>
   We're excited to help you find the right professional for every job.
</p>
<p>
   On Demand Service Platform
</p>
`