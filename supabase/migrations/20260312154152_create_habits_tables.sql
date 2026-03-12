/*
  # Create habits tracking system tables

  1. New Tables
    - `habits` - User habits with name, category, icon, description
    - `habit_check_ins` - Daily check-in records with timestamps
    - `habit_badges` - Achievement badges for habits
    - `habit_streaks` - Track current and longest streaks

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Ensure data privacy and user isolation

  3. Key Features
    - Support multiple habits per user
    - Track daily check-ins with timestamps
    - Calculate streaks and statistics
    - Award badges for achievements
*/

CREATE TABLE IF NOT EXISTS habits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  category text NOT NULL,
  icon text NOT NULL,
  description text,
  color text DEFAULT 'blue',
  target_count integer DEFAULT 1,
  frequency text DEFAULT 'daily',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS habit_check_ins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  habit_id uuid NOT NULL REFERENCES habits(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  check_in_date date NOT NULL,
  count integer DEFAULT 1,
  notes text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS habit_streaks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  habit_id uuid NOT NULL REFERENCES habits(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  current_streak integer DEFAULT 0,
  longest_streak integer DEFAULT 0,
  last_check_in_date date,
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS habit_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  habit_id uuid NOT NULL REFERENCES habits(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_name text NOT NULL,
  badge_icon text NOT NULL,
  achieved_at timestamptz DEFAULT now(),
  milestone integer
);

ALTER TABLE habits ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_check_ins ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own habits"
  ON habits
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own habits"
  ON habits
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own habits"
  ON habits
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own habits"
  ON habits
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read own check-ins"
  ON habit_check_ins
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own check-ins"
  ON habit_check_ins
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own check-ins"
  ON habit_check_ins
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own check-ins"
  ON habit_check_ins
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read own streaks"
  ON habit_streaks
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own streaks"
  ON habit_streaks
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own streaks"
  ON habit_streaks
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own badges"
  ON habit_badges
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own badges"
  ON habit_badges
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_habits_user_id ON habits(user_id);
CREATE INDEX idx_habit_check_ins_habit_id ON habit_check_ins(habit_id);
CREATE INDEX idx_habit_check_ins_user_id ON habit_check_ins(user_id);
CREATE INDEX idx_habit_check_ins_date ON habit_check_ins(check_in_date);
CREATE INDEX idx_habit_streaks_habit_id ON habit_streaks(habit_id);
CREATE INDEX idx_habit_streaks_user_id ON habit_streaks(user_id);
