# LTO Education - Backend README

## Project Overview

Backend API for LTO Education admission consulting service built with Node.js, Express, TypeScript, and Supabase.

## Architecture

- **API Layer**: Express routes and controllers
- **Core Layer**: Configuration and database connections
- **Models Layer**: Database schemas and types
- **Services Layer**: Business logic and data access
- **Middleware Layer**: Authentication, validation, CORS
- **Types Layer**: TypeScript definitions
- **Utils Layer**: Helper functions

## Technology Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: Supabase (PostgreSQL)
- **Development**: Nodemon for auto-reload
- **Environment**: dotenv for configuration

## Database Schema

### Tables Created:

- **counselors**: Counselor profiles with name, email, timestamps
- **students**: Student profiles linked to counselors with progress tracking
- **Relationships**: Students belong to counselors (foreign key relationship)

### Sample Data:

- 2 counselors: Sarah Johnson, Michael Chen
- 3 students: Alex Thompson, Emma Davis, James Wilson
- Progress tracking with percentage completion

## API Endpoints Implemented

### Health Check:

- `GET /api/health` - Server status verification

### Counselor Management:

- `GET /api/counselors` - Retrieve all counselors
- `GET /api/counselors/:id/students` - Get counselor with assigned students

### Student Management:

- `GET /api/students` - Retrieve all students with counselor info
- `GET /api/students/:id` - Get individual student details

## Services Layer

- **counselorService**: Data access for counselor operations
- **studentService**: Data access for student operations
- Both services include error handling and Supabase integration

## Current Status

- ✅ Basic server setup and configuration
- ✅ Database connection and schema
- ✅ Core API endpoints functional
- ✅ Sample data populated
- ✅ Testing endpoints verified
- ✅ Git repository initialized
