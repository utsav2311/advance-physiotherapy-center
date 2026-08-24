// Built-in Physiotherapy Exercise Library for Advance Physiotherapy Centre CRM

export const EXERCISE_CATEGORIES = [
  { id: 'spine', name: 'Spine & Lower Back (Lumbar)', icon: 'spine' },
  { id: 'cervical', name: 'Neck & Cervical Spine', icon: 'neck' },
  { id: 'knee_hip', name: 'Knee, Hip & Lower Limb', icon: 'knee' },
  { id: 'shoulder', name: 'Shoulder & Upper Limb', icon: 'shoulder' },
  { id: 'neuro', name: 'Neurological & Balance', icon: 'neuro' },
  { id: 'core_posture', name: 'Core & Postural Ergonomics', icon: 'posture' },
];

export const EXERCISE_LIBRARY = [
  // 1. Spine & Lower Back
  {
    id: 'ex-spine-1',
    category: 'spine',
    name: 'McKenzie Prone Press-Up',
    hindiName: 'मैकेंजी बैक एक्सटेंशन (पेट के बल)',
    target: 'Lumbar disc herniation, sciatica, extension restoration',
    defaultReps: '10 repetitions',
    defaultSets: '3 sets daily',
    holdTime: '5-10 sec hold at top',
    instructions:
      'Lie face down on a firm surface. Place palms under shoulders and gently push the upper body upward while keeping the pelvis relaxed on the bed.',
    precautions: 'Do not lift pelvis off bed. Stop if radiating leg pain worsens.',
  },
  {
    id: 'ex-spine-2',
    category: 'spine',
    name: 'Bridging (Pelvic Lift)',
    hindiName: 'ब्रिजिंग एक्सरसाइज (कमर उठाना)',
    target: 'Gluteus maximus, hamstring, core & lumbar stability',
    defaultReps: '12 repetitions',
    defaultSets: '2 sets daily',
    holdTime: '5 sec hold',
    instructions:
      'Lie on your back with knees bent and feet flat on the floor. Lift hips upward toward the ceiling until knees, hips, and shoulders form a straight line.',
    precautions: 'Avoid hyperextending the lower back. Squeeze glutes at top.',
  },
  {
    id: 'ex-spine-3',
    category: 'spine',
    name: 'Cat-Camel Spinal Mobilization',
    hindiName: 'कैट-कैमल स्पाइन स्ट्रेच',
    target: 'Thoracolumbar segmental mobility & stiffness reduction',
    defaultReps: '10 repetitions',
    defaultSets: '2 sets daily',
    holdTime: 'Smooth alternating cycles',
    instructions:
      'Start on all fours with hands under shoulders and knees under hips. Arch back upward (Cat), then let belly dip down toward the floor while looking forward (Camel).',
    precautions: 'Perform in a slow, continuous pain-free range.',
  },
  {
    id: 'ex-spine-4',
    category: 'spine',
    name: 'Bird-Dog Core Stability',
    hindiName: 'बर्ड-डॉग कोर स्ट्रेंथिंग',
    target: 'Deep core stabilizers (Multifidus & Transversus Abdominis)',
    defaultReps: '10 reps each side',
    defaultSets: '2 sets daily',
    holdTime: '3-5 sec hold',
    instructions:
      'On hands and knees, extend right arm straight forward and left leg straight back simultaneously until parallel to floor. Alternate sides.',
    precautions: 'Maintain neutral spine; avoid tilting pelvis or rotating hips.',
  },
  {
    id: 'ex-spine-5',
    category: 'spine',
    name: 'Knee-to-Chest Stretch (Single/Double)',
    hindiName: 'घुटने को सीने से लगाना',
    target: 'Lumbar paraspinal stretch, gluteal decompression',
    defaultReps: '5 reps each leg',
    defaultSets: '2 sets daily',
    holdTime: '20-30 sec hold',
    instructions:
      'Lie on your back, bend one knee and pull it gently toward your chest with both hands. Feel gentle stretch in lower back and hip.',
    precautions: 'Do not jerk. Breathe normally throughout.',
  },

  // 2. Neck & Cervical Spine
  {
    id: 'ex-cervical-1',
    category: 'cervical',
    name: 'Cervical Chin Tucks (Axial Retraction)',
    hindiName: 'चिन टक (गर्दन पीछे खींचना)',
    target: 'Deep neck flexors (Longus colli/capitis), forward head posture',
    defaultReps: '10 repetitions',
    defaultSets: '3 sets daily',
    holdTime: '5 sec hold',
    instructions:
      'Sit tall with shoulders relaxed. Look straight ahead and gently glide chin straight backward without tilting head up or down (create a double chin).',
    precautions: 'Do not look down. Motion is purely horizontal retraction.',
  },
  {
    id: 'ex-cervical-2',
    category: 'cervical',
    name: 'Isometric Neck Strengthening (4-Way)',
    hindiName: 'आइसोमेट्रिक नेक एक्सरसाइज (4 दिशाओं में)',
    target: 'Cervical paraspinal & sternocleidomastoid stability',
    defaultReps: '5 reps per direction',
    defaultSets: '2 sets daily',
    holdTime: '6-8 sec hold',
    instructions:
      'Place palm on forehead and press head forward against palm resistance without actual head movement. Repeat for back of head, right side, and left side.',
    precautions: 'Use gentle 30-40% pressure. Avoid breath-holding.',
  },
  {
    id: 'ex-cervical-3',
    category: 'cervical',
    name: 'Upper Trapezius & Levator Scapulae Stretch',
    hindiName: 'ट्रेपेजियस व गर्दन स्ट्रेच',
    target: 'Neck stiffness, tension headache, upper back spasm',
    defaultReps: '3 reps each side',
    defaultSets: '2 sets daily',
    holdTime: '20-30 sec hold',
    instructions:
      'Sit upright. Gently tilt right ear toward right shoulder. Use right hand for mild assistance. To target levator scapulae, turn head 45° and look toward right armpit.',
    precautions: 'Do not force. Keep opposite shoulder relaxed down.',
  },
  {
    id: 'ex-cervical-4',
    category: 'cervical',
    name: 'Scapular Retractions (Shoulder Blade Pinch)',
    hindiName: 'कंधे के ब्लेड को पीछे सिकोड़ना',
    target: 'Rhomboids, middle trapezius, posture alignment',
    defaultReps: '15 repetitions',
    defaultSets: '3 sets daily',
    holdTime: '5 sec squeeze',
    instructions:
      'Sit or stand tall. Squeeze your shoulder blades together and downward as if pinching a pencil between them. Relax and repeat.',
    precautions: 'Do not shrug shoulders upward toward ears.',
  },

  // 3. Knee, Hip & Lower Limb
  {
    id: 'ex-knee-1',
    category: 'knee_hip',
    name: 'Static Quadriceps (Isometric Quad Sets)',
    hindiName: 'स्टैटिक क्वाड्रिसेप्स (घुटने को नीचे दबाना)',
    target: 'Vastus medialis oblique (VMO), knee osteoarthritis, post-op rehab',
    defaultReps: '15 repetitions',
    defaultSets: '3 sets daily',
    holdTime: '5-10 sec hold',
    instructions:
      'Sit with legs extended straight on bed. Place a rolled towel under the knee. Tighten thigh muscles and push the back of knee firmly down into the towel.',
    precautions: 'Keep toes pointed upward and heel grounded.',
  },
  {
    id: 'ex-knee-2',
    category: 'knee_hip',
    name: 'Straight Leg Raise (SLR)',
    hindiName: 'सीधा पैर उठाना (SLR)',
    target: 'Quadriceps strengthening without joint compression',
    defaultReps: '10 reps each leg',
    defaultSets: '3 sets daily',
    holdTime: '5 sec hold at 45°',
    instructions:
      'Lie on back. Bend one knee with foot flat. Lock the other knee straight, point toes up, and lift leg ~45 degrees from the floor. Lower slowly.',
    precautions: 'Keep knee completely straight throughout the lift.',
  },
  {
    id: 'ex-knee-3',
    category: 'knee_hip',
    name: 'Short Arc Quadriceps (Terminal Knee Extension)',
    hindiName: 'शॉर्ट आर्क क्वाड्स (रोल के ऊपर पैर सीधा करना)',
    target: 'End-range knee extension, patellofemoral mechanics',
    defaultReps: '12 repetitions',
    defaultSets: '2 sets daily',
    holdTime: '5 sec hold',
    instructions:
      'Lie on back with a 6-inch bolster or rolled blanket under knee. Straighten lower leg completely by lifting foot off bed. Squeeze thigh at peak.',
    precautions: 'Ensure thigh stays resting on the roll.',
  },
  {
    id: 'ex-knee-4',
    category: 'knee_hip',
    name: 'Clamshells (Gluteus Medius)',
    hindiName: 'क्लैमशेल (कूल्हे की साइड मजबूती)',
    target: 'Gluteus medius, hip abductor stability, runner’s knee',
    defaultReps: '15 reps each side',
    defaultSets: '2 sets daily',
    holdTime: '2 sec pause at top',
    instructions:
      'Lie on side with knees bent at 90° and feet together. Keeping feet touching, lift top knee upward toward ceiling without rotating pelvis back.',
    precautions: 'Do not let torso roll backward.',
  },
  {
    id: 'ex-knee-5',
    category: 'knee_hip',
    name: 'Heel Slides for Knee Flexion ROM',
    hindiName: 'हील स्लाइड (घुटना मोड़ना व सीधा करना)',
    target: 'Post-op ACL/TKR range of motion restoration',
    defaultReps: '10 repetitions',
    defaultSets: '3 sets daily',
    holdTime: '5 sec hold at max bend',
    instructions:
      'Lie on back on a smooth surface. Slide heel backward toward buttocks bending the knee as far as comfortable. Slowly slide back straight.',
    precautions: 'Use a towel around foot for assistance if needed.',
  },

  // 4. Shoulder & Upper Limb
  {
    id: 'ex-shoulder-1',
    category: 'shoulder',
    name: 'Codman Pendulum Exercises',
    hindiName: 'पेंडुलम एक्सरसाइज (कंधा ढीला छोड़ना)',
    target: 'Early frozen shoulder, rotator cuff decompression, joint lubrication',
    defaultReps: '20 circular swings',
    defaultSets: '3 sets daily',
    holdTime: 'Continuous relaxed momentum',
    instructions:
      'Bend forward at waist supporting good arm on table. Let affected arm hang completely relaxed like a pendulum. Gently sway body to swing arm in circles.',
    precautions: 'Do not use shoulder muscles actively; use body sway for momentum.',
  },
  {
    id: 'ex-shoulder-2',
    category: 'shoulder',
    name: 'Finger Ladder / Wall Crawl',
    hindiName: 'दीवार पर अंगुलियों से चढ़ना (कंधा खोलना)',
    target: 'Active-assisted shoulder flexion & abduction ROM',
    defaultReps: '10 climbs',
    defaultSets: '3 sets daily',
    holdTime: '10 sec hold at top',
    instructions:
      'Stand facing a wall (or side-facing). Walk fingers slowly upward step by step until a gentle stretch is felt. Hold, then walk fingers back down.',
    precautions: 'Do not hike or shrug your shoulder up while climbing.',
  },
  {
    id: 'ex-shoulder-3',
    category: 'shoulder',
    name: 'Towel Internal Rotation Stretch',
    hindiName: 'तौलिया स्ट्रेच (हाथ पीठ के पीछे)',
    target: 'Posterior capsule mobility, hand-behind-back restoration',
    defaultReps: '5 repetitions',
    defaultSets: '2 sets daily',
    holdTime: '15-20 sec hold',
    instructions:
      'Hold a towel over unaffected shoulder with top hand. Grasp bottom of towel behind lower back with affected hand. Gently pull towel upward with top hand.',
    precautions: 'Do not pull into sharp pain. Smooth, gradual tension only.',
  },
  {
    id: 'ex-shoulder-4',
    category: 'shoulder',
    name: 'Theraband Shoulder External Rotation',
    hindiName: 'थेराबैंड रोटेटर कफ स्ट्रेंथिंग',
    target: 'Infraspinatus, teres minor, rotator cuff stability',
    defaultReps: '12 repetitions',
    defaultSets: '3 sets daily',
    holdTime: '2 sec hold',
    instructions:
      'Stand with elbow bent at 90° tucked by side (place a small towel roll under elbow). Hold resistance band and rotate forearm outward away from belly.',
    precautions: 'Keep elbow pinned to ribcage throughout movement.',
  },

  // 5. Neurological & Balance
  {
    id: 'ex-neuro-1',
    category: 'neuro',
    name: 'Tandem Stance & Heel-to-Toe Balance',
    hindiName: 'टैंडम बैलेंस (एक पैर के आगे दूसरा)',
    target: 'Proprioception, vestibular balance, fall prevention in seniors',
    defaultReps: '3 repetitions each foot leading',
    defaultSets: '2 sets daily',
    holdTime: '20-30 sec hold',
    instructions:
      'Stand near a sturdy wall or chair. Place one foot directly in front of the other so heel touches opposite toes. Maintain balance with eyes open (or closed for progression).',
    precautions: 'Keep support hand hovering near wall for safety.',
  },
  {
    id: 'ex-neuro-2',
    category: 'neuro',
    name: 'Sit-to-Stand Transfer Training',
    hindiName: 'कुर्सी से उठना-बैठना अभ्यास',
    target: 'Functional lower limb power, post-stroke motor control',
    defaultReps: '10 repetitions',
    defaultSets: '2 sets daily',
    holdTime: 'Controlled descent',
    instructions:
      'Sit on a standard firm chair with feet shoulder-width apart. Lean chest forward over knees, push through heels to stand upright without hand support if able. Sit back slowly.',
    precautions: 'Avoid collapsing onto chair when sitting down.',
  },
  {
    id: 'ex-neuro-3',
    category: 'neuro',
    name: 'Weight Shifts on Parallel / Wobble Board',
    hindiName: 'बॉडी वेट शिफ्टिंग व बैलेंस ट्रेनिंग',
    target: 'Weight-bearing tolerance, hemi-paretic side integration',
    defaultReps: '20 shifts',
    defaultSets: '2 sets daily',
    holdTime: '3-5 sec per side',
    instructions:
      'Stand tall holding parallel bars or firm railing. Slowly shift 70-80% body weight onto affected leg, hold, then transfer weight smoothly to other side.',
    precautions: 'Ensure knee does not hyperextend on weight-bearing.',
  },

  // 6. Core & Postural Ergonomics
  {
    id: 'ex-core-1',
    category: 'core_posture',
    name: 'Dead Bug Neuromuscular Core Control',
    hindiName: 'डेड बग कोर कंट्रोल',
    target: 'Anterior core stability, lumbo-pelvic dissociation',
    defaultReps: '10 reps alternating',
    defaultSets: '2 sets daily',
    holdTime: 'Controlled tempo',
    instructions:
      'Lie on back with arms pointing up and knees bent at 90°. Slowly lower right arm overhead and extend left leg down near floor while pressing lower back into ground. Return and alternate.',
    precautions: 'Do not let lower back arch off the mat.',
  },
  {
    id: 'ex-core-2',
    category: 'core_posture',
    name: 'Doorway Pectoral Stretch',
    hindiName: 'डोरवे चेस्ट स्ट्रेच (झुकी पीठ सीधी करना)',
    target: 'Pectoralis major/minor tightness, rounded shoulder posture',
    defaultReps: '3 repetitions',
    defaultSets: '3 sets daily',
    holdTime: '20-30 sec hold',
    instructions:
      'Stand in a doorway. Place forearms on door frame with elbows at 90°. Step forward with one foot until a comfortable stretch is felt across chest and front shoulders.',
    precautions: 'Keep neck long and avoid arching lower back.',
  },
];
