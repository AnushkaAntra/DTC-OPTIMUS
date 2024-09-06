// src/app/admin/page.tsx
import Navbar from '@/components/custom/Navbar';
import Home from '@/components/custom/Manager';
import ChartViews from '@/components/custom/ChartViews';

export default function AdminPage() {
  return (
    <div>
      
      <Home />
      <ChartViews />
    </div>
  );
}

