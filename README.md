# GitTodo - React Application

A modern React application built with Vite, featuring a To-Do application and GitHub user search functionality. This project demonstrates the use of React functional components, Redux Toolkit for state management, and React Router for navigation.

## 🚀 Features

### Home Page (`/`)

- Clean and modern landing page
- Navigation buttons to access To-Do and GitHub features
- Responsive design with gradient backgrounds

### To-Do Application (`/todo`)

- Add new tasks with a text input field
- Display tasks as interactive cards
- Delete tasks with a single click
- 3 default tasks included on first load
- Redux Toolkit state management
- Separate components for input and task list

### GitHub User Search (`/github`)

- Search for GitHub users by username
- Display user profile information including:
  - Profile avatar
  - Name and username
  - Bio (if available)
  - Location (if available)
  - Number of followers
  - Number of public repositories
- Loading states and error handling
- Responsive card design

## 🛠️ Technologies Used

- **React 19** - Functional components with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management for the To-Do application
- **React Router** - Client-side routing
- **CSS** - Custom styling with modern design patterns

## 📦 Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone <repository-url>
   cd "GitTodo"
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install additional required packages**:
   ```bash
   npm install @reduxjs/toolkit react-redux react-router-dom
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── TaskInput.tsx    # Task input form component
│   ├── TaskInput.css
│   ├── TaskList.tsx     # Task list display component
│   ├── TaskList.css
│   ├── GitHubUserCard.tsx # GitHub user profile card
│   └── GitHubUserCard.css
├── pages/               # Page components
│   ├── Home.tsx         # Landing page
│   ├── Home.css
│   ├── Todo.tsx         # To-Do application page
│   ├── Todo.css
│   ├── GitHub.tsx       # GitHub search page
│   └── GitHub.css
├── store/               # Redux store configuration
│   ├── store.ts         # Store setup
│   └── todoSlice.ts     # To-Do state management
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
├── index.css            # Global styles
└── vite-env.d.ts        # Vite type definitions
```

## 🎯 Key Features Implementation

### Redux Toolkit Integration

- **Store Configuration**: Centralized state management
- **Todo Slice**: Handles task addition and deletion
- **useSelector & useDispatch**: React-Redux hooks for state access

### React Router Setup

- **BrowserRouter**: Client-side routing
- **Route Configuration**: Three main routes (`/`, `/todo`, `/github`)
- **useNavigate**: Programmatic navigation

### GitHub API Integration

- **Fetch API**: HTTP requests to GitHub Users API
- **Error Handling**: User-friendly error messages
- **Loading States**: Spinner animation during API calls
- **Data Display**: Structured user information cards

## 🎨 Design Features

- **Modern UI**: Clean, card-based design with gradients
- **Responsive**: Works on desktop and mobile devices
- **Interactive**: Hover effects and smooth transitions
- **Accessible**: Proper focus states and semantic HTML
- **Consistent**: Unified color scheme and typography

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Usage Examples

### Adding a Task

1. Navigate to `/todo`
2. Enter task description in the input field
3. Click "Save Task" or press Enter
4. Task appears in the list below

### Searching GitHub Users

1. Navigate to `/github`
2. Enter a GitHub username (e.g., "facebook", "microsoft")
3. Click "Search" or press Enter
4. View user profile information

### Navigation

- Use the buttons on the home page to navigate between features
- Browser back/forward buttons work as expected
- Direct URL access is supported

## 🐛 Troubleshooting

### Common Issues

1. **Dependencies not found**: Run `npm install` to install all packages
2. **TypeScript errors**: Ensure all dependencies are properly installed
3. **Routing issues**: Verify React Router is properly configured
4. **Redux not working**: Check that Provider is wrapping the App component

### Development Tips

- Use the browser's developer tools to inspect Redux state
- Check the Network tab for GitHub API requests
- Use React Developer Tools for component debugging

## 📝 Notes

- The application uses the public GitHub API (no authentication required)
- To-Do data is stored in Redux state (not persisted between sessions)
- All styling is done with custom CSS (no external UI libraries)
- The application is fully responsive and works on all modern browsers

## 🤝 Contributing

This is an assignment project, but feel free to suggest improvements or report issues.

---

**Built with ❤️ using React, TypeScript, and Vite**
