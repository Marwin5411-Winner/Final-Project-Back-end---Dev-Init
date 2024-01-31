##โครงสร้างฐานข้อมูล
```
   1. ตาราง Users 

    user_id (Primary Key)
    username
    password (เก็บเป็น hash)
    email
    created_at
    last_login


   2. ตาราง Daily Logs

    log_id (Primary Key)
    user_id (Foreign Key จากตาราง Users)
    content
    date
    created_at


	3. ตาราง To-Do List

    todo_id (Primary Key)
    user_id (Foreign Key จากตาราง Users)
    title
    description
    due_date
    priority
    status
    created_at


	4. ตาราง Calendar Events

    event_id (Primary Key)
    user_id (Foreign Key จากตาราง Users)
    title
    description
    start_date
    end_date
    created_at

```

##Requirement
หมายเหตุสำหรับโครงสร้างข้อมูล

    ควรมีการจัดการเกี่ยวกับเวลา (created_at, last_login, date, due_date, start_date, end_date) โดยใช้ timestamp หรือ datetime ตามที่เหมาะสม
    สำหรับ password, ควรมีการเข้ารหัสก่อนเก็บลงในฐานข้อมูล hash หรือ bcrypt ก็ได้
    สถานะของ To-Do (เช่น completed, pending) ควรเป็น enum หรือ boolean มากกว่าการใส่สถานะไปตรง ๆ นะคร้าบ 😀
    อาจมีการเพิ่มฟิลด์เพิ่มเติมตามความต้องการของแอปพลิเคชั่นและความซับซ้อนของฟีเจอร์

การออกแบบนี้เป็นเพียงตัวอย่างพื้นฐานที่สามารถขยายและปรับเปลี่ยนได้ตามความจำเป็นและฟีเจอร์เฉพาะของแอปพลิเคชันได้เลย

##Procedure
```
    - Login with Username and Password

```

###Log Type
```
    - user_created

```

###Database SQL
```
    
CREATE TABLE `daily_logs` (
  `log_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `daily_logs`
--

INSERT INTO `daily_logs` (`log_id`, `user_id`, `content`, `date`, `created_at`) VALUES
(2, 3, 'user_created', '2024-01-31', '2024-01-31 09:27:04');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event_title` varchar(255) NOT NULL,
  `event_description` text,
  `event_start_date` datetime NOT NULL,
  `event_end_date` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `to_do`
--

CREATE TABLE `to_do` (
  `todo_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `todo_title` varchar(255) NOT NULL,
  `todo_description` text NOT NULL,
  `todo_duedate` datetime DEFAULT NULL,
  `todo_priority` int(11) NOT NULL,
  `todo_status` enum('0','1','2') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `created_date`, `last_login`) VALUES
(3, 'marwin5411@outlook.com', '$2b$10$u8OFTUY.JpH9riCHzVCcf.UPPc4fQi00RvWKyAC3Cx0j.60pvamVq', 'marwin5411@outlook.com', '2024-01-31 09:27:04', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daily_logs`
--
ALTER TABLE `daily_logs`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `to_do`
--
ALTER TABLE `to_do`
  ADD PRIMARY KEY (`todo_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daily_logs`
--
ALTER TABLE `daily_logs`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `to_do`
--
ALTER TABLE `to_do`
  MODIFY `todo_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;
```


