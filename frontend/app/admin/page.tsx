// src/app/admin/page.tsx
import Navbar from '@/components/custom/Navbar';
import Home from '@/components/custom/Home';
export default function AdminPage() {
  return (
    <div>
      <Navbar />
      <Home/>
      <h1>Welcome to the Admin Dashboard</h1>
    </div>
  );
}
