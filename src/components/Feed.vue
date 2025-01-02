<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- User Post -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden community-post">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
            alt="User"
          />
          <div class="ml-3">
            <div class="font-medium">Maria Rodriguez</div>
            <div class="text-sm text-gray-500">
              2 hours ago · <span class="location-tag">Madrid</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <p class="text-gray-600 mb-4">
            Just finished an amazing workshop with @SalsaMaster! Here are my top
            3 takeaways for improving your basic steps:
          </p>
          <ul class="text-gray-600 mb-4 list-disc pl-4 space-y-2">
            <li>Keep your core engaged - it helps with balance and turns</li>
            <li>
              Focus on the connection with your partner, not just the steps
            </li>
            <li>
              Practice musicality by listening to salsa music even when not
              dancing
            </li>
          </ul>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Workshop Tips</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Beginner Friendly</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Technique</span
            >
          </div>
          <p class="text-gray-600">
            What are your favorite tips for improving basics? Share below! 💃
          </p>
        </div>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:heart" class="w-5 h-5" />
            <span>42 Likes</span>
          </button>
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:chat-circle" class="w-5 h-5" />
            <span>12 Comments</span>
          </button>
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:share-network" class="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Event Promotion -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden community-post">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
            alt="User"
          />
          <div class="ml-3">
            <div class="font-medium">Carlos Mendoza</div>
            <div class="text-sm text-gray-500">
              4 hours ago · <span class="location-tag">Barcelona</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <h3 class="font-bold mb-2">
            🎉 Barcelona Summer Salsa Festival 2024
          </h3>
          <img
            src="https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&h=400&fit=crop"
            alt="Festival Poster"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p class="text-gray-600 mb-4">
            Get ready for the hottest salsa event of the summer! Three days of
            workshops, performances, and social dancing by the beach.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <div class="font-medium mb-2">Event Details:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>📅 July 15-17, 2024</li>
              <li>📍 Barceloneta Beach Club</li>
              <li>🎓 20+ International Instructors</li>
              <li>🎵 Live Music & DJs</li>
              <li>💃 All Levels Welcome</li>
            </ul>
          </div>
          <p class="text-purple-600 font-medium">
            Early bird tickets available until May 1st!
          </p>
        </div>
        <div class="flex items-center gap-4 mt-4">
          <button
            class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Get Tickets
          </button>
          <span class="text-sm text-gray-500">156 people interested</span>
        </div>
      </div>
    </div>

    <!-- Video Tutorial -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden community-post">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            alt="User"
          />
          <div class="ml-3">
            <div class="font-medium">Sophie Laurent</div>
            <div class="text-sm text-gray-500">
              6 hours ago · <span class="location-tag">Paris</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <h3 class="font-bold mb-2">🎥 Tutorial: Advanced Turn Patterns</h3>
          <div class="relative mb-4">
            <img
              src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&h=400&fit=crop"
              alt="Tutorial Thumbnail"
              class="w-full h-48 object-cover rounded-lg"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <button class="bg-white/90 p-3 rounded-full hover:bg-white">
                <svg
                  class="w-8 h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p class="text-gray-600 mb-4">
            In this tutorial, I break down three complex turn patterns that will
            add flair to your social dancing. Perfect for intermediate/advanced
            dancers looking to expand their repertoire.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <div class="font-medium mb-2">What You'll Learn:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• The "Butterfly Spin" combination</li>
              <li>• Advanced cross-body variations</li>
              <li>• Styling tips for leads and follows</li>
              <li>• Musicality and timing</li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Advanced</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Turn Patterns</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Tutorial</span
            >
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:heart" class="w-5 h-5" />
            <span>89 Likes</span>
          </button>
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:chat-circle" class="w-5 h-5" />
            <span>24 Comments</span>
          </button>
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:share-network" class="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Community Question -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden community-post">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="User"
          />
          <div class="ml-3">
            <div class="font-medium">John Smith</div>
            <div class="text-sm text-gray-500">
              5 hours ago · <span class="location-tag">Munich</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <h3 class="font-bold mb-2">Looking for practice partner in Munich</h3>
          <p class="text-gray-600 mb-4">
            Intermediate level, available weekday evenings. Anyone interested in
            regular practice sessions?
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Partner Search</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Munich</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Intermediate</span
            >
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:heart" class="w-5 h-5" />
            <span>8 Responses</span>
          </button>
          <button class="text-purple-600 font-medium">Respond →</button>
        </div>
      </div>
    </div>

    <!-- Venue Review -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden community-post">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            alt="User"
          />
          <div class="ml-3">
            <div class="font-medium">David Chen</div>
            <div class="text-sm text-gray-500">
              1 day ago · <span class="location-tag">London</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <h3 class="font-bold mb-2">
            📍 Venue Review: Salsa Nights at Havana Club
          </h3>
          <div class="flex items-center mb-3">
            <div class="flex text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <span class="ml-2 text-gray-600">5.0</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=400&fit=crop"
            alt="Venue"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p class="text-gray-600 mb-4">
            Fantastic atmosphere at this new spot in Soho! Live band on Fridays,
            great dance floor, and friendly crowd. The instructors for the
            pre-party lesson were excellent.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <div class="font-medium mb-2">Quick Info:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>🎵 Live Music Fridays</li>
              <li>📍 123 Soho Street</li>
              <li>🕒 Lessons: 8pm, Party: 9pm-2am</li>
              <li>💷 Entry: £12 (includes lesson)</li>
            </ul>
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:heart" class="w-5 h-5" />
            <span>35 Likes</span>
          </button>
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:chat-circle" class="w-5 h-5" />
            <span>15 Comments</span>
          </button>
          <button class="text-purple-600 font-medium">View Venue →</button>
        </div>
      </div>
    </div>

    <!-- Community Project -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden community-post">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            alt="User"
          />
          <div class="ml-3">
            <div class="font-medium">Sarah Chen</div>
            <div class="text-sm text-gray-500">
              1 day ago · <span class="location-tag">Berlin</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <h3 class="font-bold mb-2">
            🎉 New Community Project: Salsa for Beginners Workshop Series
          </h3>
          <p class="text-gray-600 mb-4">
            Looking for experienced dancers to help organize free workshops for
            beginners. Let's make salsa more accessible!
          </p>
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <div class="font-medium mb-2">Project Details:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Weekly workshops (2 hours)</li>
              <li>• Need: 4-5 volunteer instructors</li>
              <li>• Location: Community Center</li>
              <li>• Starting next month</li>
            </ul>
          </div>
        </div>
        <div class="flex items-center gap-4 mt-4">
          <button
            class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Join Project
          </button>
          <span class="text-sm text-gray-500">12 people interested</span>
        </div>
      </div>
    </div>

    <!-- Travel Plan Post -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden community-post">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            alt="User"
          />
          <div class="ml-3">
            <div class="font-medium">Anna Schmidt</div>
            <div class="text-sm text-gray-500">
              1 day ago · <span class="location-tag">Berlin</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <h3 class="font-bold mb-2">
            🚗 Sharing ride to Paris Salsa Festival
          </h3>
          <p class="text-gray-600 mb-4">
            Driving from Berlin to Paris for the festival next month. Have 3
            seats available, looking to share costs and good vibes!
          </p>
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <div class="font-medium mb-2">Trip Details:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>📅 Departure: Sept 15, 6:00 AM</li>
              <li>🚗 Berlin → Paris (10-11h drive)</li>
              <li>💰 ~40€ per person</li>
              <li>🎵 Salsa playlist included!</li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Travel Share</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Festival</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Berlin-Paris</span
            >
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:heart" class="w-5 h-5" />
            <span>5 Responses</span>
          </button>
          <button class="text-purple-600 font-medium">Contact →</button>
        </div>
      </div>
    </div>

    <!-- Find Events Post -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden community-post">
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
            alt="User"
          />
          <div class="ml-3">
            <div class="font-medium">Marco Rossi</div>
            <div class="text-sm text-gray-500">
              2 days ago · <span class="location-tag">Rome</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <h3 class="font-bold mb-2">🗺️ Events in Rome this Weekend</h3>
          <p class="text-gray-600 mb-4">
            Visiting Rome this weekend (Aug 12-14). Any social dancing events or
            workshops happening?
          </p>
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <div class="font-medium mb-2">Looking for:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>🎯 Social dancing events</li>
              <li>💃 Any style (salsa, bachata, kizomba)</li>
              <li>📅 Aug 12-14</li>
              <li>📍 Central Rome preferred</li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Event Search</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Rome</span
            >
            <span
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
              >Weekend</span
            >
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <button class="flex items-center gap-1 hover:text-purple-600">
            <Icon name="ph:heart" class="w-5 h-5" />
            <span>8 Suggestions</span>
          </button>
          <button class="text-purple-600 font-medium">Add Suggestion →</button>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center mt-8">
    <button class="text-purple-600 font-medium hover:text-purple-700">
      Load More Posts
    </button>
  </div>
</template>
