# Digital Signing Process

## Overview

This document outlines how to digitally sign and acknowledge WeDance agreements, following our principles of transparency and trust.

## Required Agreements

New team members must sign:

1. [Code of Conduct](./code-of-conduct.md)
2. [Contributor Agreement](./contributor-agreement.md)
3. [Privacy Guidelines](./privacy-guidelines.md)

## Signing Process

### 1. GitHub-based Signing

1. Fork the WeDance repository
2. Create a new branch: `sign/your-github-username`
3. Create a file in `signatures/YYYY-MM/your-github-username.md` with:

   ```md
   # Signature Record

   GitHub Username: your-github-username
   Full Name: Your Full Name
   Date: YYYY-MM-DD

   ## Agreements Acknowledged

   I have read, understood, and agree to follow:

   - [ ] Code of Conduct
   - [ ] Contributor Agreement
   - [ ] Privacy Guidelines

   ## Verification

   By creating this file and submitting a pull request, I digitally sign these agreements.
   ```

4. Submit a pull request
5. Core team member will review and merge

### 2. Alternative Process

For contributors who don't use GitHub:

1. Email team@wedance.vip requesting agreements
2. Receive DocuSign or similar digital signing request
3. Complete the digital signature
4. Receive confirmation email

## Verification

- Signatures are publicly visible in the repository
- Each agreement has a unique commit hash
- History of changes is maintained
- Signatures can be verified through Git history

## Updates

When agreements are updated:

1. All members will be notified
2. Review period of 2 weeks
3. Acknowledgment required through:
   - New signature file, or
   - Update existing signature file

## Questions

For questions about the signing process:

1. Open a discussion in GitHub
2. Email team@wedance.vip
3. Ask in the core team channel
