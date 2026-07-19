
        const dropoutLyrics = [
            "“Mayonnaise-colored Benz, I push miracle whips.”\n— Last Call",
            "“Couldn't afford a car, so she named her daughter Alexis.”\n— All Falls Down",
            "“We all self-conscious, I'm just the first to admit it.”\n— All Falls Down",
            "“You know the kids gon' act a fool / When you stop the programs for after-school.”\n— We Don't Care",
            "“It seems we living the American dream / But the people highest up got the lowest self-esteem.”\n— All Falls Down",
            "“Lock yourself in a room doing 5 beats a day for 3 summers / That's a Different World like Cree Summer's.”\n— Spaceship",
            "“They be asking us questions, harass and arrest us / Saying 'we eat pieces of s#@t like you for breakfast' / Huh? Y'all eat pieces of s#@t? What's the basis?”\n— Jesus Walks",
            "...they just be concealin' it.”\n— Never Let Me Down",
            "“Oh my god, is that a black card? / I turned around and replied, 'Why yes, but I prefer the term African American Express'”\n— Last Call",
            "“But I'm a champion, so I turned tragedy to triumph / Make music that's fire, spit my soul through the wire.”\n— Through the Wire"
        ];

        const introOverlay = document.getElementById('intro-overlay');
        const closeIntroBtn = document.getElementById('close-intro-btn');

        const dropoutBear = document.getElementById('dropout-bear');
        const dropoutBtn = document.getElementById('dropout-btn');
        const dropoutBubble = document.getElementById('dropout-bubble');

        const yeezusBear = document.getElementById('yeezus-bear');
        const yeezusBtn = document.getElementById('yeezus-btn');
        const yeezusBubble = document.getElementById('yeezus-bubble');

        // DYNAMIC FOOTER INJECTION: Loads programmatically within JS execution context
        function initFooter() {
            const footer = document.createElement('footer');
            footer.className = 'dynamic-footer';
            
            // Note: Remember to swap out placeholder text with your actual names and URL strings!
            footer.innerHTML = `
                &copy; 2026 <a href="https://hiretamara.com" target="_blank">Tamara O.</a> | "We miss the old kanYe West." A portfolio project made with Javascript,<a href="https://genius.com/artists/Kanye-west" class="genius" target="_blank">Genius lyrics</a> and the <a href="" target="_blank" class="restapi">Kanye REST API</a>. <a href="https://hiretamara.com/#nav-portfolio" target="_blank">Back to Portfolio</a>
            `;
            
            document.body.appendChild(footer);
        }
        
        // Execute footer build on runtime initialization
        initFooter();

        // CHANGED: Removed auto-triggers here so windows stay hidden on start
        closeIntroBtn.addEventListener('click', () => {
            introOverlay.classList.add('hidden');
        });

        function displayGeniusLyric() {
            dropoutBubble.classList.remove('active');
            
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * dropoutLyrics.length);
                dropoutBubble.innerText = dropoutLyrics[randomIndex];
                dropoutBubble.classList.add('active');
            }, 200);
        }

        async function fetchKanyeAPIQuote() {
            yeezusBubble.classList.remove('active');
            
            try {
                const response = await fetch('https://api.kanye.rest/');
                if (!response.ok) throw new Error('API Error');
                
                const data = await response.json();
                
                setTimeout(() => {
                    yeezusBubble.innerText = `“${data.quote}”`;
                    yeezusBubble.classList.add('active');
                }, 200);
                
            } catch (error) {
                setTimeout(() => {
                    yeezusBubble.innerText = "“I am one with the universe, but the API network is down.”";
                    yeezusBubble.classList.add('active');
                }, 200);
            }
        }

        dropoutBtn.addEventListener('click', displayGeniusLyric);
        dropoutBear.addEventListener('click', displayGeniusLyric);

        yeezusBtn.addEventListener('click', fetchKanyeAPIQuote);
        yeezusBear.addEventListener('click', fetchKanyeAPIQuote);
