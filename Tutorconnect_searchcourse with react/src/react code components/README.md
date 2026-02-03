# Course Search App - React Version

This is a React conversion of your course search application.

## 🚀 Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
course-search-app/
├── components/
│   ├── Header.jsx          # Top navigation bar
│   ├── SearchSection.jsx   # Search bar and filters
│   ├── CourseGrid.jsx      # Grid layout for courses
│   └── CourseCard.jsx      # Individual course card
├── public/
│   └── images/             # Place your images here
├── App.jsx                 # Main application component
├── App.css                 # All styles
├── main.jsx               # Entry point
├── index.html             # HTML template
└── package.json           # Dependencies

```

## 🎓 How React State & Events Work (Student-Friendly Explanation)

### What Changed from Vanilla JS to React?

#### 1. **State Management (useState)**
- **Before (Vanilla JS):** You used `document.getElementById()` to grab elements and manually changed their values
- **After (React):** We use `useState` to store and update data

```javascript
// Vanilla JS way:
const searchInput = document.getElementById("searchInput");
searchInput.value = "something";

// React way:
const [searchValue, setSearchValue] = useState('');
// To update: setSearchValue('something');
```

**Why it's better:** React automatically updates the UI when state changes. No need to manually update the DOM!

#### 2. **Event Handlers**
- **Before:** You added event listeners like `addEventListener("input", ...)`
- **After:** You pass functions directly to components as props

```javascript
// Vanilla JS way:
searchInput.addEventListener("input", async () => {
  // do something
});

// React way:
<input 
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
/>
```

#### 3. **Side Effects (useEffect)**
- **Before:** Code ran immediately or on events
- **After:** `useEffect` runs code when specific values change

```javascript
// This runs whenever searchValue changes
useEffect(() => {
  // Fetch courses from API
}, [searchValue]);
```

**Think of it like:** "Hey React, whenever searchValue changes, run this code"

### Key States in the App:

1. **`searchValue`** - What the user types in the search box
2. **`courses`** - All available courses
3. **`filteredCourses`** - Courses matching the search/filter
4. **`activeFilter`** - Which category filter is selected
5. **`loading`** - Whether we're fetching data
6. **`error`** - Any error messages

### Data Flow:

1. User types in search box → `setSearchValue()` updates state
2. `useEffect` detects the change → Makes API call
3. API returns data → `setFilteredCourses()` updates state
4. React re-renders → UI shows new courses

### Component Breakdown:

- **App.jsx** - The "brain" that holds all the state and logic
- **Header.jsx** - Simple display component (no state)
- **SearchSection.jsx** - Gets search value from parent, sends changes back up
- **CourseGrid.jsx** - Receives filtered courses and displays them
- **CourseCard.jsx** - Shows a single course (receives course data as prop)

### Props (Passing Data Down):

```javascript
// Parent passes data to child:
<CourseCard course={courseData} />

// Child receives and uses it:
function CourseCard({ course }) {
  return <h1>{course.title}</h1>
}
```

**Think of props like:** Giving your component instructions or information it needs to do its job.

## 🔧 Features Implemented:

✅ Real-time search with API integration  
✅ Category filtering (All, Design, Development, etc.)  
✅ Automatic fallback to static data if API fails  
✅ Debounced search (waits 300ms before searching)  
✅ Loading and error states  
✅ Responsive grid layout  
✅ Hover effects and animations  

## 💡 Tips for Your Project:

1. **To add more courses:** Edit the `staticCourses` array in `App.jsx`
2. **To change styles:** Edit `App.css`
3. **To add more filters:** Add to the `filters` array in `SearchSection.jsx`
4. **Images:** Place them in `public/images/` folder

## 🐛 Common Issues:

**Problem:** API not working  
**Solution:** The app falls back to static courses automatically

**Problem:** Images not showing  
**Solution:** Make sure images are in `public/images/` and paths match

**Problem:** Port already in use  
**Solution:** Change port in `vite.config.js` or kill the process on port 5173

## 📚 Learning Resources:

- [React Official Tutorial](https://react.dev/learn)
- [useState Hook](https://react.dev/reference/react/useState)
- [useEffect Hook](https://react.dev/reference/react/useEffect)
- [Vite Documentation](https://vitejs.dev/)

Good luck with your project! 🎉
