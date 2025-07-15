import React from 'react';
import { Search, X, Calendar, MoreHorizontal, Plus, User } from 'lucide-react';

function FreeAI() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="grid grid-cols-2 gap-6 ">
        {/* Keyboard Shortcuts Card */}
        <div className=" card1 w-96 h-96 bg-gradient-to-br from-orange-800 via-orange-900 to-black rounded-2xl p-6 text-white relative overflow-hidden">
          {/* Command Palette Mockup */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/10">
            <div className="flex items-center gap-2 text-gray-300 text-sm mb-3">
              <Search className="w-4 h-4" />
              <span>Run command...</span>
              <X className="w-4 h-4 ml-auto" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between py-1 px-2 hover:bg-white/10 rounded">
                <span>Mark Task as Done</span>
                <span className="text-gray-400">⌘</span>
              </div>
              <div className="flex items-center justify-between py-1 px-2 hover:bg-white/10 rounded">
                <span>Open To Do List</span>
                <span className="text-gray-400">⌘</span>
              </div>
              <div className="flex items-center justify-between py-1 px-2 hover:bg-white/10 rounded">
                <span>Switch to Timeline View</span>
                <span className="text-gray-400">⌘</span>
              </div>
            </div>
          </div>

          {/* Keyboard Visualization */}
          <div className="absolute bottom-20 left-6 right-6">
            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className={`h-6 rounded ${
                    i % 10 === 3 || i % 10 === 7 ? 'bg-orange-500' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Title and Description */}
           <div className="absolute bottom-2 left-6 right-6 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <h3 className="text-lg font-semibold mb-1">KeyBoard Shortcuts.</h3>
            <p className="text-gray-200 text-xs leading-relaxed">
              Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.
            </p>
          </div>
        </div>

        {/* Team Planner Card */}
        <div className="card2  h-96 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 text-white relative overflow-hidden">
          {/* Calendar Interface Mockup */}
          <div className="space-y-4 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Today Panel */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium">Today</h4>
                <X className="w-4 h-4 text-gray-400" />
              </div>
              
              {/* Task Cards */}
              <div className="space-y-1.5">
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-yellow-500/30 text-yellow-200 px-2 py-1 rounded">Medium</span>
                    <MoreHorizontal className="w-3 h-3 text-gray-400 ml-auto" />
                  </div>
                  <p className="text-xs text-gray-200 mb-1">Perform SEO audit and enhance web visibility</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Apr 24</span>
                    <div className="flex items-center gap-1">
                      <span>4</span>
                      <span>3</span>
                    </div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-pink-500/30 text-pink-200 px-2 py-1 rounded">High</span>
                    <MoreHorizontal className="w-3 h-3 text-gray-400 ml-auto" />
                  </div>
                  <p className="text-xs text-gray-200 mb-1">Implement new features according to project requirements</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Apr 16</span>
                    <div className="flex items-center gap-1">
                      <span>2</span>
                      <span>1</span>
                    </div>
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border border-white/20"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full border border-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="absolute top-6 right-6 bg-gray-800/50 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Plus className="w-4 h-4" />
                <span className="text-sm">Create New</span>
              </div>
              <div className="text-xs text-gray-400 mb-1.5">What is the project?</div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Message</div>
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="absolute bottom-2 left-6 right-6 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <h3 className="text-lg font-semibold mb-1">Team Planner.</h3>
            <p className="text-gray-200 text-xs leading-relaxed">
              Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.
            </p>
          </div>
        </div>

        {/* Analytics Dashboard Card */}
        <div className="w-96 h-96 bg-gradient-to-br from-purple-800 via-purple-900 to-black rounded-2xl p-6 text-white relative overflow-hidden">
          {/* Dashboard Interface Mockup */}
          <div className="space-y-4 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="text-xs text-purple-300">Last 30 days</div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="text-2xl font-bold mb-1">24.5K</div>
                <div className="text-xs text-gray-300">Total Views</div>
                <div className="text-xs text-green-400 mt-1">+12.5%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="text-2xl font-bold mb-1">1.2K</div>
                <div className="text-xs text-gray-300">Conversions</div>
                <div className="text-xs text-red-400 mt-1">-3.2%</div>
              </div>
            </div>

            {/* Chart Visualization */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Revenue Trend</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-end gap-1 h-16">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-purple-500 to-purple-300 rounded-sm flex-1"
                    style={{ height: `${Math.random() * 60 + 20}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="text-sm font-medium mb-2">Recent Activity</div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">New user registered</span>
                  <span className="text-gray-500 ml-auto">2m ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Payment received</span>
                  <span className="text-gray-500 ml-auto">5m ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="absolute bottom-2 left-6 right-6 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <h3 className="text-lg font-semibold mb-1">Analytics Dashboard.</h3>
            <p className="text-gray-200 text-xs leading-relaxed">
              Monitor your business performance with real-time analytics and comprehensive reporting tools.
            </p>
          </div>
        </div>

        {/* File Manager Card */}
        <div className="w-96 h-96 bg-gradient-to-br from-teal-800 via-teal-900 to-black rounded-2xl p-6 text-white relative overflow-hidden">
          {/* File Manager Interface Mockup */}
          <div className="space-y-4 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded"></div>
                </div>
                <span className="text-sm">Documents</span>
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-teal-600/50 rounded flex items-center justify-center">
                  <Plus className="w-3 h-3" />
                </div>
                <div className="w-6 h-6 bg-teal-600/50 rounded flex items-center justify-center">
                  <Search className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="text-xs text-gray-300 flex items-center gap-1">
              <span>Home</span>
              <span>/</span>
              <span>Projects</span>
              <span>/</span>
              <span className="text-white">Documents</span>
            </div>

            {/* File List */}
            <div className="space-y-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">DOC</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Project Proposal.docx</div>
                    <div className="text-xs text-gray-400">Modified 2 hours ago • 2.4 MB</div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">XLS</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Budget Analysis.xlsx</div>
                    <div className="text-xs text-gray-400">Modified yesterday • 1.8 MB</div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">PDF</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">User Manual.pdf</div>
                    <div className="text-xs text-gray-400">Modified 3 days ago • 5.2 MB</div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Storage Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-300">Storage Used</span>
                <span className="text-xs">47.2 GB / 100 GB</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '47%' }}></div>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="absolute bottom-2 left-6 right-6 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <h3 className="text-lg font-semibold mb-1">File Manager.</h3>
            <p className="text-gray-200 text-xs leading-relaxed">
              Organize, share, and manage all your files in one secure location with advanced search capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeAI;