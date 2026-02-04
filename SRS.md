# Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose

This document defines the complete functional and non‑functional requirements for an **Offline‑First Desktop Point of Sale (POS) System** designed to run on a single counter computer. It serves as the authoritative guide for designers, developers, testers, and stakeholders to implement the system consistently without external research.

The system’s core purpose is to **record, process, and manage sales and inventory reliably while fully offline**, with a premium user experience, secure access control, and accurate financial handling.

Color pallete is 2 refreshing blue colors, 2 feel good green colors and the white that looks kinda blue but is white. The buttons should be rounded and big, the font should be big and readable, the interface should be clean and simple, the interface should be responsive and should work on different screen sizes, the interface should be easy to navigate and should be easy to use, the interface should be visually appealing and should be modern and professional.

### 1.2 Scope

The POS system will:

* Operate entirely offline on a desktop computer
* Track inventory and sales in real time
* Provide a fast, intelligent cashier interface for checkout
* Provide a secure administrator/owner portal for management and reporting
* Store all data locally in a secure offline database
* Print receipts via a single USB thermal receipt printer

Cloud connectivity is explicitly **out of scope for the core system** and may be added later as an optional extension.

### 1.3 Intended Users

* **Cashier** – Executes sales and prints receipts
* **Administrator** – Manages inventory, products, prices, and users
* **Owner** – Views reports, sales history, analytics, and system health

---

## 2. System Overview

### 2.1 Core Philosophy

The system prioritizes:

* Reliability over novelty
* Speed of operation at the counter
* Minimal cognitive load for cashiers
* Clear, auditable records for owners
* Predictable behavior under power loss or restarts

The software must behave deterministically and never compromise financial integrity.

### 2.2 Operating Environment

* Desktop OS: Windows or Linux
* Hardware:

  * Single desktop or laptop
  * USB thermal receipt printer (ESC/POS compatible)
  * Keyboard and mouse
* Internet connection: Optional, not required

---

## 3. Functional Requirements

### 3.1 Authentication and User Management

#### 3.1.1 Login System

* The system shall require authentication on startup
* Users must log in using a username and password
* Passwords must be securely hashed and stored

#### 3.1.2 Roles and Permissions

* Cashier:

  * Access sales screen
  * Perform checkout
  * Print receipts
* Administrator:

  * All cashier permissions
  * Manage inventory and products
  * View sales reports
* Owner:

  * Read‑only access to all sales and analytics
  * Cannot alter historical sales

---

## 4. Cashier Module (Counter Interface)

### 4.1 Primary Objective

Enable the cashier to complete sales **as fast as possible with zero mental arithmetic**.

### 4.2 Product Search and Selection

#### 4.2.1 Intelligent Search

* Search must be instantaneous and local
* Supports:

  * Partial name matching
  * SKU/code matching
  * Case‑insensitive input
* Results update as the cashier types

#### 4.2.2 Product Variants

* Products may have variants such as:

  * Size
  * Color
  * Unit type
* Variants must be selectable at add‑to‑cart time

---

### 4.3 Cart Management

* The cart must display:

  * Product name
  * Variant (if applicable)
  * Quantity
  * Unit price
  * Line total
* Cashier can:

  * Increase/decrease quantity
  * Remove items
* Totals update in real time

---

### 4.4 Pricing and Math Intelligence

The system must perform all calculations automatically.

#### 4.4.1 Numeric Formatting

* Monetary values must:

  * Automatically insert commas for thousands
  * Display fixed decimal precision
* Input fields must accept only numeric values

#### 4.4.2 Checkout Logic

* Cashier enters amount received
* System automatically calculates:

  * Change due
* Change updates live as amount received changes

---

### 4.5 Sale Finalization

* On confirmation:

  * Sale is stored in the database
  * Inventory is deducted atomically
  * Receipt is printed
* If printing fails:

  * Sale must still be recorded
  * System logs printer error

---

## 5. Inventory Management Module (Admin)

### 5.1 Product Creation

* Admin can create new products with:

  * Name
  * SKU
  * Category
  * Cost price
  * Selling price
  * Quantity
  * Optional variants

### 5.2 Intelligent Stock Entry

* Stock entry interface must:

  * Minimize typing
  * Support bulk additions
  * Auto‑calculate totals when quantities change
* Sizes and variants should be configurable once and reused

---

### 5.3 Inventory Tracking

* System must track:

  * Current stock levels
  * Stock deductions from sales
  * Manual stock adjustments
* Prevent selling items with zero stock (configurable override)

---

## 6. Sales History and Reporting (Admin / Owner)

### 6.1 Sales Records

Each sale must store:

* Sale ID
* Date and time
* Cashier
* Items sold
* Total amount
* Payment received
* Change given

---

### 6.2 Filtering and Search

* Sales can be filtered by:

  * Date range
  * Product
  * Cashier
  * Customer (if recorded)

---

### 6.3 Reporting

* Daily sales summary
* Product performance reports
* Inventory movement reports

Reports must load instantly using local data.

---

## 7. Receipt Printing

### 7.1 Printer Requirements

* Single USB thermal receipt printer
* ESC/POS compatible

### 7.2 Receipt Content

Receipt must include:

* Shop name
* Date and time
* Items purchased
* Quantities and prices
* Total
* Cash received
* Change

---

## 8. Data Management

### 8.1 Database

* Local SQLite database
* ACID compliant transactions
* Single database file stored locally

### 8.2 Data Integrity

* All sales operations must be transactional
* Power loss during sale must not corrupt data

---

## 9. Non‑Functional Requirements

### 9.1 Performance

* Product search results must appear in under 100ms
* Checkout confirmation must complete in under 1 second

### 9.2 Usability

* Interface must be usable with one hand
* Fonts must be large and readable
* Primary actions must be reachable within one click

### 9.3 Security

* Password hashing
* Role‑based access
* No plaintext sensitive data

---

## 10. Assumptions and Constraints

* Single‑machine deployment
* Single receipt printer
* Offline‑only operation

---

## 11. Future Extensions (Not Implemented Now)

* Cloud sync
* Multi‑branch support
* Mobile POS
* Customer loyalty programs

---

## 12. Acceptance Criteria

The system is accepted when:

* Sales can be completed without internet
* Inventory updates accurately
* Receipts print reliably
* Admin can audit all historical sales
* Cashiers perform zero manual calculations

---

**End of Document**
