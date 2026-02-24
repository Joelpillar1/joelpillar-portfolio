import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Marquee } from './ui/3d-testimonails';

// Unique reviews data
const testimonials = [
    {
        name: 'Chioma Adebayo',
        username: '@chioma_design',
        body: 'The attention to user flows and micro-interactions is outstanding. Our user retention jumped by 30% within a month!',
        img: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfcc4?w=150&h=150&fit=crop',
        country: '🇳🇬 Nigeria',
    },
    {
        name: 'Kwame Osei',
        username: '@kwame_creates',
        body: 'Absolutely stellar branding work. The visual hierarchy perfectly captured our company\'s luxury essence.',
        img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop',
        country: '🇬🇭 Ghana',
    },
    {
        name: 'James Thorne',
        username: '@james_t',
        body: 'A brilliant product designer who truly understands user empathy. The wireframes were intuitive from day one.',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        country: '🇬🇧 UK',
    },
    {
        name: 'Amina Hassan',
        username: '@amina_ux',
        body: 'Beautiful craft and pixel-perfect execution. The component library you built for us is an absolute game-changer.',
        img: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=150&h=150&fit=crop',
        country: '🇰🇪 Kenya',
    },
    {
        name: 'David Omondi',
        username: '@domondi22',
        body: 'The new graphic marketing assets and ad creatives have significantly improved our ad conversion rates. Top tier!',
        img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop',
        country: '🇿🇦 South Africa',
    },
    {
        name: 'Michael Weber',
        username: '@michael_w',
        body: 'Incredible speed transitioning from Figma concepts to high-fidelity interactive prototypes. A highly reliable partner.',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        country: '🇩🇪 Germany',
    },
    {
        name: 'Sarah Mensah',
        username: '@sarah_designs',
        body: 'The typography choices and whitespace are just so premium. It gave our SaaS the exact modern feel we wanted.',
        img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=150&h=150&fit=crop',
        country: '🇳🇬 Nigeria',
    },
    {
        name: 'Thomas Anderson',
        username: '@thomas_anderson',
        body: 'We needed a complete overhaul of our onboarding flow. The resulting UX was seamless, frictionless, and beautiful.',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        country: '🇺🇸 USA',
    },
    {
        name: 'Chidi Eze',
        username: '@chidi_eze',
        body: 'The 3D assets and motion graphics you integrated completely elevated our landing page experience.',
        img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150&h=150&fit=crop',
        country: '🇳🇬 Nigeria',
    },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
    return (
        <Card className="w-50">
            <CardContent className="p-4 pt-4">
                <div className="flex items-center gap-2.5">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={img} alt={name} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-slate-900 flex items-center gap-1">
                            {name} <span className="text-xs">{country}</span>
                        </figcaption>
                        <p className="text-xs font-medium text-slate-500">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-3 text-sm text-slate-700 leading-relaxed">{body}</blockquote>
            </CardContent>
        </Card>
    );
}

export default function TestimonialsDemo() {
    return (
        <div className="relative flex h-[500px] w-full max-w-[1000px] mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:1000px] bg-transparent">
            <div
                className="flex flex-row items-center justify-center gap-4"
                style={{
                    transform:
                        'translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
                }}
            >
                <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>
            </div>

            {/* Gradient overlays matching global background */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#fcfbf8]"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#fcfbf8]"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#fcfbf8]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#fcfbf8]"></div>
        </div>
    );
}
