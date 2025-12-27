
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500 hover:text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-primary text-lg font-bold tracking-tight hidden sm:block">Dashboard</h2>
      </div>

      <div className="flex-1 max-w-xl mx-4 lg:mx-12">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 border-none rounded-xl bg-slate-100 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all sm:text-sm"
            placeholder="Search equipment, serials, or requests..."
            type="text"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-xs text-slate-400 border border-slate-300 rounded px-1.5 py-0.5 hidden lg:block uppercase font-medium">⌘K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        <button className="flex items-center justify-center size-10 rounded-xl bg-white text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors relative border border-slate-200">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2.5 right-2.5 size-2 bg-accent-red rounded-full border border-white"></span>
        </button>
        <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
        <button className="flex items-center gap-3 group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-primary leading-tight">Alex M.</p>
            <p className="text-xs text-slate-500">Tech Lead</p>
          </div>
          <div 
            className="size-10 rounded-full bg-slate-200 bg-cover bg-center border-2 border-white shadow-sm"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCys0DvVomSGaALmcNouYYm54EuuVW8StnHtfX1dA6ZvServp2Y_4x7AqgVkzxj6Q1u2myxYvaaG0T4b-Pc27MMAX-8lMhnjDWD7QBlOrERZ18FGiiF_DrfcQZyqYoWkTMDRihbU0eiVy5EV_4jSFwbJj1WnE0Z3UerS1PGYbDtqdWcbwcc6iMHvIsOamfRqWx2gG_8SeX0aT8SnBpS-dd5kP0nxBoO5sao1od_sdvIIFct8dhy_xIPJ6dXhgHo8FFQ1_54Cv67O8Cf')" }}
          ></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
